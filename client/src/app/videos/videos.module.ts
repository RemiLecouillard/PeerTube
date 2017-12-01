import { NgModule } from '@angular/core'
import { SharedModule } from '../shared'
import { VideoService } from './shared'
import { MyVideosComponent, VideoMiniatureComponent } from './video-list'
import { VideoRecentlyAddedComponent } from './video-list/video-recently-added.component'
import { VideoTrendingComponent } from './video-list/video-trending.component'
import { VideosRoutingModule } from './videos-routing.module'
import { VideosComponent } from './videos.component'

@NgModule({
  imports: [
    VideosRoutingModule,
    SharedModule
  ],

  declarations: [
    VideosComponent,

    VideoTrendingComponent,
    VideoRecentlyAddedComponent,
    MyVideosComponent,
    VideoMiniatureComponent
  ],

  exports: [
    VideosComponent
  ],

  providers: [
    VideoService
  ]
})
export class VideosModule { }
