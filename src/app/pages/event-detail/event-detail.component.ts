import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SERVICES } from '../../data/services';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent {
  private readonly route = inject(ActivatedRoute);

  readonly event = toSignal(
    this.route.paramMap.pipe(
      map((params) => {
        const slug = params.get('slug');
        return SERVICES.find((item) => item.slug === slug) ?? SERVICES[0];
      })
    ),
    { initialValue: SERVICES[0] }
  );
}
