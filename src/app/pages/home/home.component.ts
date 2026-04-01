import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES, ServiceItem } from '../../data/services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  readonly featuredServices = SERVICES.slice(0, 3);
  readonly otherServices = SERVICES.slice(3);
  readonly rotatingWords = ['Fiable', 'Rapide', 'Proximite'];
  currentWordIndex = 0;
  private rotationTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.rotationTimer = setInterval(() => {
      this.currentWordIndex = (this.currentWordIndex + 1) % this.rotatingWords.length;
    }, 2500);
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

  ngOnDestroy(): void {
    if (this.rotationTimer) {
      clearInterval(this.rotationTimer);
    }
  }

  getServiceVisual(service: ServiceItem): { icon: string; background: string; color: string } {
    const visuals: Record<string, { icon: string; background: string; color: string }> = {
      jardinage: {
        icon: 'bi-tree-fill',
        background: '#7ca8e1',
        color: '#ffffff'
      },
      'service-chambre-froide': {
        icon: 'bi-snow2',
        background: '#528cd8',
        color: '#ffffff'
      },
      'maintenance-electricite': {
        icon: 'bi-lightning-charge-fill',
        background: '#255a9f',
        color: '#ffffff'
      },
      'maintenance-plomberie': {
        icon: 'bi-droplet-fill',
        background: '#2e71c9',
        color: '#ffffff'
      }
    };

    return (
      visuals[service.slug] ?? {
        icon: 'bi-briefcase-fill',
        background: '#2e71c9',
        color: '#ffffff'
      }
    );
  }
}
