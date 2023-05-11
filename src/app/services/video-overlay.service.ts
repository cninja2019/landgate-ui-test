import { ComponentRef, Injectable } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { take, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { VideoComponent } from '../components/video/video.component';

@Injectable({
  providedIn: 'root'
})
export class VideoOverlayService {
  private destroy$ = new Subject();
  private videoOverlay: OverlayRef;

  constructor(
    private overlay: Overlay,
  ) { }

  public show() {
    this.destroy$.next(true);
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();
    this.videoOverlay = this.overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.overlay.scrollStrategies.noop(),
      backdropClass: 'primary-backdrop',
      panelClass: 'flex-center',
      positionStrategy: positionStrategy,
      maxWidth: '70vw',
      maxHeight: '70vh',
      width: '70vw',
      height: '40vw',
      minWidth: '320px',
      minHeight: '200px',
    });
    const componentPortal = new ComponentPortal(VideoComponent);
    let ref: ComponentRef<VideoComponent>;
    ref = this.videoOverlay.attach(componentPortal);

    this.videoOverlay?.keydownEvents().pipe(takeUntil(this.destroy$)).subscribe(res => {
      if (res?.code === 'Escape') {
        this.closeOverlay();
      }
    })

    this.videoOverlay?.backdropClick().pipe(take(1)).subscribe(() => this.closeOverlay())
  }

  private closeOverlay() {
    this.videoOverlay?.detach();
    this.videoOverlay?.dispose();
    this.overlay?.position().global().dispose();

    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
