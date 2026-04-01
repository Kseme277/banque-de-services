import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES, ServiceItem } from '../../data/services';

@Component({
  selector: 'app-event-listing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './event-listing.component.html'
})
export class EventListingComponent {
  readonly featuredServices = SERVICES.slice(0, 3);
  readonly otherServices = SERVICES.slice(3);

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
