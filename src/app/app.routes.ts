import { Routes } from '@angular/router';
import { AccordionComponent } from "./accordion/accordion.component";
import { FooterComponent } from "./footer/footer.component";
import {BadgeComponent} from "./badge/badge.component";
import {HeaderComponent} from "./header/header.component";
import {ButtonComponent} from "./button/button.component";
import {ButtonGroupComponent} from "./button-group/button-group.component";
import {CalloutComponent} from "./callout/callout.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {ChipComponent} from "./chip/chip.component";
import {CircularProgressComponent} from "./circular-progress/circular-progress.component";
import {ContainerComponent} from "./container/container.component";
import {DetailComponent} from "./detail/detail.component";
import {DividerComponent} from "./divider/divider.component";
import {DropdownComponent} from "./dropdown/dropdown.component";
import {FileUploadComponent} from "./file-upload/file-upload.component";
import {FormItemComponent} from "./form-item/form-item.component";
import {FormStepperComponent} from "./form-stepper/form-stepper.component";
import {GridComponent} from "./grid/grid.component";
import {HeroBannerComponent} from "./hero-banner/hero-banner.component";
import {IconComponent} from "./icon/icon.component";
import {IconButtonComponent} from "./icon-button/icon-button.component";
import {InputComponent} from "./input/input.component";
import {MicrositeHeaderComponent} from "./microsite-header/microsite-header.component";
import {ModalComponent} from "./modal/modal.component";
import {NotificationBannerComponent} from "./notification-banner/notification-banner.component";
import {PaginateComponent} from "./paginate/paginate.component";
import {PopoverComponent} from "./popover/popover.component";
import {RadioComponent} from "./radio/radio.component";
import {SidemenuComponent} from "./sidemenu/sidemenu.component";
import {SkeletonComponent} from "./skeleton/skeleton.component";
import {SpacingComponent} from "./spacing/spacing.component";
import {TableComponent} from "./table/table.component";
import {TabsComponent} from "./tabs/tabs.component";
import {TextAreaComponent} from "./text-area/text-area.component";
import {ThreeColumnLayoutComponent} from "./three-column-layout/three-column-layout.component";
import {TooltipComponent} from "./tooltip/tooltip.component";
import {TwoColumnLayoutComponent} from "./two-column-layout/two-column-layout.component";
import {DatePickerComponent} from "./date-picker/date-picker.component";


export const routes: Routes = [
  {
    path: "accordion",
    component: AccordionComponent
  },
  {
    path: "app-footer",
    component: FooterComponent
  },
  {
    path: "badge",
    component: BadgeComponent
  },
  {
    path: "app-header",
    component: HeaderComponent
  },
  {
    path: "button",
    component: ButtonComponent
  },
  {
    path: "button-group",
    component: ButtonGroupComponent
  },
  {
    path: "callout",
    component: CalloutComponent
  },
  {
    path: "checkbox",
    component: CheckboxComponent
  },
  {
    path: "chip",
    component: ChipComponent
  },
  {
    path: "circular-progress",
    component: CircularProgressComponent
  },
  {
    path: "container",
    component: ContainerComponent
  },
  {
    path: "detail",
    component: DetailComponent
  },
  {
    path: "divider",
    component: DividerComponent
  },
  {
    path: "dropdown",
    component: DropdownComponent
  },
  {
    path: "file-upload",
    component: FileUploadComponent
  },
  {
    path: "form-item",
    component: FormItemComponent
  },
  {
    path: "form-stepper",
    component: FormStepperComponent
  },
  {
    path: "grid",
    component: GridComponent
  },
  {
    path: "hero-banner",
    component: HeroBannerComponent
  },
  {
    path: "icon",
    component: IconComponent
  },
  {
    path: "icon-button",
    component: IconButtonComponent
  },
  {
    path: "input",
    component: InputComponent
  },
  {
    path: "microsite-header",
    component: MicrositeHeaderComponent
  },
  {
    path: "modal",
    component: ModalComponent
  },
  {
    path: "notification-banner",
    component: NotificationBannerComponent
  },
  {
    path: "paginate",
    component: PaginateComponent
  },
  {
    path: "popover",
    component: PopoverComponent
  },
  {
    path: "radio",
    component: RadioComponent
  },
  {
    path: "side-menu",
    component: SidemenuComponent
  },
  {
    path: "skeleton",
    component: SkeletonComponent
  },
  {
    path: "spacing",
    component: SpacingComponent
  },
  {
    path: "table",
    component: TableComponent
  },
  {
    path: "tabs",
    component: TabsComponent
  },
  {
    path: "textarea",
    component: TextAreaComponent
  },
  {
    path: "three-column-layout",
    component: ThreeColumnLayoutComponent
  },
  {
    path: "tooltip",
    component: TooltipComponent
  },
  {
    path: "two-column-layout",
    component: TwoColumnLayoutComponent
  },
  {
    path: "date-picker",
    component: DatePickerComponent
  }
];
