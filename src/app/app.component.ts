import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  VERSION
} from "@angular/core";
import {
  ANIMATION_FRAME,
  LOCAL_STORAGE,
  LOCATION,
  NAVIGATOR,
  PAGE_VISIBILITY,
  PERFORMANCE,
  SESSION_STORAGE,
  SPEECH_RECOGNITION,
  SPEECH_SYNTHESIS,
  USER_AGENT,
  WINDOW
} from "@ng-web-apis/common";
import { Observable } from "rxjs";
import { throttleTime } from "rxjs/operators";

@Component({
  selector: "main",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly performanceOnStart = this.performance.now();

  readonly animationFrame30Fps$ = this.animationFrame$.pipe(
    throttleTime(1000 / 30)
  );

  constructor(
    @Inject(WINDOW) readonly windowRef: Window,
    @Inject(NAVIGATOR) readonly navigator: Navigator,
    @Inject(USER_AGENT) readonly userAgent: string,
    @Inject(PERFORMANCE) private readonly performance: Performance,
    @Inject(ANIMATION_FRAME)
    private readonly animationFrame$: Observable<number>,
    @Inject(LOCATION) readonly location: Location,
    @Inject(LOCAL_STORAGE) readonly localStorage: Storage,
    @Inject(SESSION_STORAGE) readonly sessionStorage: Storage,
    @Inject(SPEECH_RECOGNITION) readonly speechRecognition: SpeechRecognition,
    @Inject(SPEECH_SYNTHESIS) readonly speechSynthesis: SpeechSynthesis,
    @Inject(PAGE_VISIBILITY) readonly pageVisibility$: Observable<boolean>
  ) {}
}
