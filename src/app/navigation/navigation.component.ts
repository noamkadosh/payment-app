import { Component, HostListener } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
  animations: [
    trigger("animateTopBar", [
      state(
        "closed",
        style({
          transform: "none",
        })
      ),
      state(
        "animating",
        style({
          transform: "translate(0, 3px)",
        })
      ),
      state(
        "open",
        style({
          transform: "rotate(45deg) translate(2.517px, 2.517px)",
        })
      ),
      transition("closed => animating", [
        animate(".1008s cubic-bezier(0.04, 0.04, 0.12, 0.96)"),
      ]),
      transition("animating => closed", [
        animate(".1008s cubic-bezier(0.04, 0.04, 0.12, 0.96)"),
      ]),
      transition("* => *", [
        animate(".3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)"),
      ]),
    ]),
    trigger("animateBottomBar", [
      state(
        "closed",
        style({
          transform: "none",
        })
      ),
      state(
        "animating",
        style({
          transform: "translate(0, -4px)",
        })
      ),
      state(
        "open",
        style({
          transform: "rotate(-45deg) translate(2.517px, -2.517px)",
        })
      ),
      transition("closed => animating", [
        animate(".1008s cubic-bezier(0.04, 0.04, 0.12, 0.96)"),
      ]),
      transition("open => animating", [
        animate(".1008s cubic-bezier(0.04, 0.04, 0.12, 0.96)"),
      ]),
      transition("* => *", [
        animate(".3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)"),
      ]),
    ]),
    trigger("toggleMobileMenu", [
      state(
        "closed",
        style({
          transform: "scaleY(0)",
        })
      ),
      state(
        "open",
        style({
          transform: "scaleY(1)",
        })
      ),
      transition("closed <=> open", [animate("0.5s ease")]),
    ]),
  ],
})
export class NavigationComponent {

  isMobileMenuClicked: boolean = false;
  mobileMenuButtonState = "closed";

  constructor() {}

  ngOnInit(): void {

  }

  toggleMobileMenu() {
    this.isMobileMenuClicked = !this.isMobileMenuClicked;
    this.mobileMenuButtonState = "animating";
  }

  animateMobileMenu($event: any) {
    if ($event.fromState == "closed") {
      this.mobileMenuButtonState = "open";
    }
    if ($event.fromState == "open") {
      this.mobileMenuButtonState = "closed";
    }
  }
}
