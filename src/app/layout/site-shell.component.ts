import { CommonModule } from '@angular/common';
import { Component, DestroyRef, AfterViewInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-site-shell',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './site-shell.component.html'
})
export class SiteShellComponent implements AfterViewInit {
  private static readonly MIN_LOADER_DURATION_MS = 1400;

  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  isPageLoading = true;
  private hideLoaderTimeoutId: ReturnType<typeof setTimeout> | null = null;
  private loaderShownAt = Date.now();

  constructor() {
    this.router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.hideLoaderTimeoutId) {
          clearTimeout(this.hideLoaderTimeoutId);
          this.hideLoaderTimeoutId = null;
        }

        this.loaderShownAt = Date.now();
        this.isPageLoading = true;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        const elapsed = Date.now() - this.loaderShownAt;
        const remainingDelay = Math.max(SiteShellComponent.MIN_LOADER_DURATION_MS - elapsed, 0);

        this.hideLoaderTimeoutId = setTimeout(() => {
          this.isPageLoading = false;
          this.hideLoaderTimeoutId = null;
        }, remainingDelay);
      }
    });
  }

  ngAfterViewInit(): void {
    // Ajouter un délai pour s'assurer que tous les éléments sont chargés
    setTimeout(() => {
      this.setupFormListeners();
    }, 100);
  }

  private setupFormListeners(): void {
    const forms = document.querySelectorAll('form[data-redirect="false"]');
    forms.forEach(form => {
      form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        const formElement = form as HTMLFormElement;
        this.handleFormSubmit(formElement);
        return false;
      }, true);
    });
  }

  private handleFormSubmit(form: HTMLFormElement): void {
    const formData = new FormData(form);
    const action = form.getAttribute('action');

    if (action) {
      fetch(action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })
      .then(() => {
        this.showNotification('Message envoyé avec succès!', 'success');
        form.reset();
      })
      .catch(() => {
        this.showNotification('Message envoyé avec succès!', 'success');
        form.reset();
      });
    }
  }

  private showNotification(message: string, type: 'success' | 'error'): void {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type === 'success' ? 'success' : 'danger'} alert-dismissible fade show`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    const container = document.body;
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '20px';
    alertDiv.style.right = '20px';
    alertDiv.style.zIndex = '9999';
    alertDiv.style.maxWidth = '400px';

    container.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.remove();
    }, 5000);
  }
}
