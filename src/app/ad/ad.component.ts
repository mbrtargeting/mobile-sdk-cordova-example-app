import { Component, ElementRef, ViewChild } from "@angular/core";

declare var SDG: Sdg;

@Component({
    selector: 'app-ad',
    template: `
        <div #ad></div>
        <ion-button (click)="reload()">Reload Ad</ion-button>
    `,
    styleUrls: []
})
export class AdComponent {
    @ViewChild('ad')
    adEl: ElementRef | undefined;
  
    protected async ngAfterViewInit(): Promise<void> {
        if (this.adEl) {
            this.registerMetatagEventHandlers(this.adEl.nativeElement);
            this.loadAd(this.adEl.nativeElement)
        }
    }

    public reload() {
        window.SDG.cmd.push(function() {
            SDG.Publisher.loadSlot("topmobile")
        })
    }

    private loadAd(el: HTMLElement): void {
        window.SDG.cmd.push(function() {
            console.log('Loading Ad');
            SDG.Publisher.setZone("homepage")
            SDG.Publisher.addKeyValue("demo", "uap")
            const myAdSlot = SDG.Publisher.registerSlot('topmobile', el)
            myAdSlot.configure({
              reserveSpace: true,
              fixedHeight: 150,
              showAdvertLabel: true,
              centerAds: true,
              showLoadingAnimation: true,
            });
            myAdSlot.load()
            SDG.Publisher.finalizeSlots()
          }
        );
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