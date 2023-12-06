import { Component, ElementRef, Input, ViewChild } from "@angular/core";

declare var SDG: Sdg;

enum AdSlot {
    TOPMOBILE = "topmobile",
    TOPMOBILE2 = "topmobile2",
    TOPMOBILE3 = "topmobile3",
    STICKYFOOTER = "stickyfooter"
}

@Component({
    selector: 'app-ad',
    template: `
        <div #ad></div>
        <ion-button *ngIf="slot !== adSlotEnum.STICKYFOOTER" (click)="reload()">Reload Ad</ion-button>
    `,
    styleUrls: []
})
export class AdComponent {
    @ViewChild('ad')
    adEl: ElementRef | undefined;

    @Input()
    public slot: string = AdSlot.TOPMOBILE;

    public adSlotEnum = AdSlot;
  
    protected async ngAfterViewInit(): Promise<void> {
        if (this.adEl) {
            this.registerMetatagEventHandlers(this.adEl.nativeElement);
            this.loadAd(this.adEl.nativeElement)
        }
    }

    public reload() {
        window.SDG.cmd.push(() => {
            SDG.Publisher.loadSlot(this.slot)
        })
    }

    private loadAd(el: HTMLElement): void {
        window.SDG.cmd.push(() => {
            console.log('Loading Ad');
            SDG.Publisher.setZone("homepage")
            SDG.Publisher.addKeyValue("demo", "uap")
            SDG.Publisher.registerSlot(this.slot, el)
                .configure(this.createAdConfig(this.slot))
          }
        );
    }

    private createAdConfig(slot: string): any {
        const commonConfig = {
            reserveSpace: true,
            showAdvertLabel: true,
            centerAds: true,
            showLoadingAnimation: true,
        }

        if (slot === AdSlot.STICKYFOOTER) {
            return {
                ...commonConfig,
                pinToBottom: true
            }
        }
        
        return commonConfig;
    }

    private registerMetatagEventHandlers(el: HTMLElement): void {
        const events: string[] = [
            'metaTagSlotRegistered',
            'metaTagSlotCalling',
            'metaTagSlotResponded',
            'metaTagSlotDone',
            'metaTagSlotEmpty',
            'metaTagSlotDeleted'
        ];

        events.forEach((event) => el.addEventListener(event, (eventObj: any) => console.log(event, JSON.stringify(eventObj.detail, null, 2))))
    }
}