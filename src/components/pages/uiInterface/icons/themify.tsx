"use client";
import { useEffect } from "react";
// import '../../../style/icon/themify/themify.css'

const ThemifyIconsComponent = () => {
  useEffect(() => {
    // Inject stylesheet link into head so CSS is available at runtime
    const href = "/style/icon/themify/themify.css"; // ensure this file is served from public/style/...
    let linkElement = document.querySelector(`link[href="${href}"]`) as HTMLLinkElement | null;

    if (!linkElement) {
      linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = href;
      document.head.appendChild(linkElement);
    }

    return () => {
      // cleanup injected link element
      const existing = document.querySelector(`link[href="${href}"]`);
      if (existing && existing.parentNode) {
        existing.parentNode.removeChild(existing);
      }
    };
  }, []);

  return (
    <div>
      <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Themify Icon</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Chart */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <div className="card-title">Themify Icon</div>
                </div>
                <div className="card-body">
                  <div className="icons-items">
                    <ul className="icons-list">
                      <li><i className="ti-arrow-up" title="ti-arrow-up"></i></li>
                      <li><i className="ti-arrow-right" title="ti-arrow-right"></i></li>
                      <li><i className="ti-arrow-left" title="ti-arrow-left"></i></li>
                      <li><i className="ti-arrow-down" title="ti-arrow-down"></i></li>
                      <li><i className="ti-arrows-vertical" title="ti-arrows-vertical"></i></li>
                      <li><i className="ti-arrows-horizontal" title="ti-arrows-horizontal"></i></li>
                      <li><i className="ti-angle-up" title="ti-angle-up"></i></li>
                      <li><i className="ti-angle-right" title="ti-angle-right"></i></li>
                      <li><i className="ti-angle-left" title="ti-angle-left"></i></li>
                      <li><i className="ti-angle-down" title="ti-angle-down"></i></li>
                      <li><i className="ti-angle-double-up" title="ti-angle-double-up"></i></li>
                      <li><i className="ti-angle-double-right" title="ti-angle-double-right"></i></li>
                      <li><i className="ti-angle-double-left" title="ti-angle-double-left"></i></li>
                      <li><i className="ti-angle-double-down" title="ti-angle-double-down"></i></li>
                      <li><i className="ti-move" title="ti-move"></i></li>
                      <li><i className="ti-fullscreen" title="ti-fullscreen"></i></li>
                      <li><i className="ti-arrow-top-right" title="ti-arrow-top-right"></i></li>
                      <li><i className="ti-arrow-top-left" title="ti-arrow-top-left"></i></li>
                      <li><i className="ti-arrow-circle-up" title="ti-arrow-circle-up"></i></li>
                      <li><i className="ti-arrow-circle-right" title="ti-arrow-circle-right"></i></li>
                      <li><i className="ti-arrow-circle-left" title="ti-arrow-circle-left"></i></li>
                      <li><i className="ti-arrow-circle-down" title="ti-arrow-circle-down"></i></li>
                      <li><i className="ti-arrows-corner" title="ti-arrows-corner"></i></li>
                      <li><i className="ti-split-v" title="ti-split-v"></i></li>
                      <li><i className="ti-split-v-alt" title="ti-split-v-alt"></i></li>
                      <li><i className="ti-split-h" title="ti-split-h"></i></li>
                      <li><i className="ti-hand-point-up" title="ti-hand-point-up"></i></li>
                      <li><i className="ti-hand-point-right" title="ti-hand-point-right"></i></li>
                      <li><i className="ti-hand-point-left" title="ti-hand-point-left"></i></li>
                      <li><i className="ti-hand-point-down" title="ti-hand-point-down"></i></li>
                      <li><i className="ti-back-right" title="ti-back-right"></i></li>
                      <li><i className="ti-back-left" title="ti-back-left"></i></li>
                      <li><i className="ti-exchange-vertical" title="ti-exchange-vertical"></i></li>
                      <li><i className="ti-wand" title="ti-wand"></i></li>
                      <li><i className="ti-save" title="ti-save"></i></li>
                      <li><i className="ti-save-alt" title="ti-save-alt"></i></li>
                      <li><i className="ti-direction" title="ti-direction"></i></li>
                      <li><i className="ti-direction-alt" title="ti-direction-alt"></i></li>
                      <li><i className="ti-user" title="ti-user"></i></li>
                      <li><i className="ti-link" title="ti-link"></i></li>
                      <li><i className="ti-unlink" title="ti-unlink"></i></li>
                      <li><i className="ti-trash" title="ti-trash"></i></li>
                      <li><i className="ti-target" title="ti-target"></i></li>
                      <li><i className="ti-tag" title="ti-tag"></i></li>
                      <li><i className="ti-desktop" title="ti-desktop"></i></li>
                      <li><i className="ti-tablet" title="ti-tablet"></i></li>
                      <li><i className="ti-mobile" title="ti-mobile"></i></li>
                      <li><i className="ti-email" title="ti-email"></i></li>
                      <li><i className="ti-star" title="ti-star"></i></li>
                      <li><i className="ti-spray" title="ti-spray"></i></li>
                      <li><i className="ti-signal" title="ti-signal"></i></li>
                      <li><i className="ti-shopping-cart" title="ti-shopping-cart"></i></li>
                      <li><i className="ti-shopping-cart-full" title="ti-shopping-cart-full"></i></li>
                      <li><i className="ti-settings" title="ti-settings"></i></li>
                      <li><i className="ti-search" title="ti-search"></i></li>
                      <li><i className="ti-zoom-in" title="ti-zoom-in"></i></li>
                      <li><i className="ti-zoom-out" title="ti-zoom-out"></i></li>
                      <li><i className="ti-cut" title="ti-cut"></i></li>
                      <li><i className="ti-ruler" title="ti-ruler"></i></li>
                      <li><i className="ti-ruler-alt-2" title="ti-ruler-alt-2"></i></li>
                      <li><i className="ti-ruler-pencil" title="ti-ruler-pencil"></i></li>
                      <li><i className="ti-ruler-alt" title="ti-ruler-alt"></i></li>
                      <li><i className="ti-bookmark" title="ti-bookmark"></i></li>
                      <li><i className="ti-bookmark-alt" title="ti-bookmark-alt"></i></li>
                      <li><i className="ti-reload" title="ti-reload"></i></li>
                      <li><i className="ti-plus" title="ti-plus"></i></li>
                      <li><i className="ti-minus" title="ti-minus"></i></li>
                      <li><i className="ti-close" title="ti-close"></i></li>
                      <li><i className="ti-pin" title="ti-pin"></i></li>
                      <li><i className="ti-pencil" title="ti-pencil"></i></li>
                      <li><i className="ti-pencil-alt" title="ti-pencil-alt"></i></li>
                      <li><i className="ti-paint-roller" title="ti-paint-roller"></i></li>
                      <li><i className="ti-paint-bucket" title="ti-paint-bucket"></i></li>
                      <li><i className="ti-na" title="ti-na"></i></li>
                      <li><i className="ti-medall" title="ti-medall"></i></li>
                      <li><i className="ti-medall-alt" title="ti-medall-alt"></i></li>
                      <li><i className="ti-marker" title="ti-marker"></i></li>
                      <li><i className="ti-marker-alt" title="ti-marker-alt"></i></li>
                      <li><i className="ti-lock" title="ti-lock"></i></li>
                      <li><i className="ti-unlock" title="ti-unlock"></i></li>
                      <li><i className="ti-location-arrow" title="ti-location-arrow"></i></li>
                      <li><i className="ti-layout" title="ti-layout"></i></li>
                      <li><i className="ti-layers" title="ti-layers"></i></li>
                      <li><i className="ti-layers-alt" title="ti-layers-alt"></i></li>
                      <li><i className="ti-key" title="ti-key"></i></li>
                      <li><i className="ti-image" title="ti-image"></i></li>
                      <li><i className="ti-heart" title="ti-heart"></i></li>
                      <li><i className="ti-heart-broken" title="ti-heart-broken"></i></li>
                      <li><i className="ti-hand-stop" title="ti-hand-stop"></i></li>
                      <li><i className="ti-hand-open" title="ti-hand-open"></i></li>
                      <li><i className="ti-hand-drag" title="ti-hand-drag"></i></li>
                      <li><i className="ti-flag" title="ti-flag"></i></li>
                      <li><i className="ti-flag-alt" title="ti-flag-alt"></i></li>
                      <li><i className="ti-flag-alt-2" title="ti-flag-alt-2"></i></li>
                      <li><i className="ti-eye" title="ti-eye"></i></li>
                      <li><i className="ti-import" title="ti-import"></i></li>
                      <li><i className="ti-export" title="ti-export"></i></li>
                      <li><i className="ti-cup" title="ti-cup"></i></li>
                      <li><i className="ti-crown" title="ti-crown"></i></li>
                      <li><i className="ti-comments" title="ti-comments"></i></li>
                      <li><i className="ti-comment" title="ti-comment"></i></li>
                      <li><i className="ti-comment-alt" title="ti-comment-alt"></i></li>
                      <li><i className="ti-thought" title="ti-thought"></i></li>
                      <li><i className="ti-clip" title="ti-clip"></i></li>
                      <li><i className="ti-check" title="ti-check"></i></li>
                      <li><i className="ti-check-box" title="ti-check-box"></i></li>
                      <li><i className="ti-camera" title="ti-camera"></i></li>
                      <li><i className="ti-announcement" title="ti-announcement"></i></li>
                      <li><i className="ti-brush" title="ti-brush"></i></li>
                      <li><i className="ti-brush-alt" title="ti-brush-alt"></i></li>
                      <li><i className="ti-palette" title="ti-palette"></i></li>
                      <li><i className="ti-briefcase" title="ti-briefcase"></i></li>
                      <li><i className="ti-bolt" title="ti-bolt"></i></li>
                      <li><i className="ti-bolt-alt" title="ti-bolt-alt"></i></li>
                      <li><i className="ti-blackboard" title="ti-blackboard"></i></li>
                      <li><i className="ti-bag" title="ti-bag"></i></li>
                      <li><i className="ti-world" title="ti-world"></i></li>
                      <li><i className="ti-wheelchair" title="ti-wheelchair"></i></li>
                      <li><i className="ti-car" title="ti-car"></i></li>
                      <li><i className="ti-truck" title="ti-truck"></i></li>
                      <li><i className="ti-timer" title="ti-timer"></i></li>
                      <li><i className="ti-ticket" title="ti-ticket"></i></li>
                      <li><i className="ti-thumb-up" title="ti-thumb-up"></i></li>
                      <li><i className="ti-thumb-down" title="ti-thumb-down"></i></li>
                      <li><i className="ti-stats-up" title="ti-stats-up"></i></li>
                      <li><i className="ti-stats-down" title="ti-stats-down"></i></li>
                      <li><i className="ti-shine" title="ti-shine"></i></li>
                      <li><i className="ti-shift-right" title="ti-shift-right"></i></li>
                      <li><i className="ti-shift-left" title="ti-shift-left"></i></li>
                      <li><i className="ti-shift-right-alt" title="ti-shift-right-alt"></i></li>
                      <li><i className="ti-shift-left-alt" title="ti-shift-left-alt"></i></li>
                      <li><i className="ti-shield" title="ti-shield"></i></li>
                      <li><i className="ti-notepad" title="ti-notepad"></i></li>
                      <li><i className="ti-server" title="ti-server"></i></li>
                      <li><i className="ti-pulse" title="ti-pulse"></i></li>
                      <li><i className="ti-printer" title="ti-printer"></i></li>
                      <li><i className="ti-power-off" title="ti-power-off"></i></li>
                      <li><i className="ti-plug" title="ti-plug"></i></li>
                      <li><i className="ti-pie-chart" title="ti-pie-chart"></i></li>
                      <li><i className="ti-panel" title="ti-panel"></i></li>
                      <li><i className="ti-package" title="ti-package"></i></li>
                      <li><i className="ti-music" title="ti-music"></i></li>
                      <li><i className="ti-music-alt" title="ti-music-alt"></i></li>
                      <li><i className="ti-mouse" title="ti-mouse"></i></li>
                      <li><i className="ti-mouse-alt" title="ti-mouse-alt"></i></li>
                      <li><i className="ti-money" title="ti-money"></i></li>
                      <li><i className="ti-microphone" title="ti-microphone"></i></li>
                      <li><i className="ti-menu" title="ti-menu"></i></li>
                      <li><i className="ti-menu-alt" title="ti-menu-alt"></i></li>
                      <li><i className="ti-map" title="ti-map"></i></li>
                      <li><i className="ti-map-alt" title="ti-map-alt"></i></li>
                      <li><i className="ti-location-pin" title="ti-location-pin"></i></li>
                      <li><i className="ti-light-bulb" title="ti-light-bulb"></i></li>
                      <li><i className="ti-info" title="ti-info"></i></li>
                      <li><i className="ti-infinite" title="ti-infinite"></i></li>
                      <li><i className="ti-id-badge" title="ti-id-badge"></i></li>
                      <li><i className="ti-hummer" title="ti-hummer"></i></li>
                      <li><i className="ti-home" title="ti-home"></i></li>
                      <li><i className="ti-help" title="ti-help"></i></li>
                      <li><i className="ti-headphone" title="ti-headphone"></i></li>
                      <li><i className="ti-harddrives" title="ti-harddrives"></i></li>
                      <li><i className="ti-harddrive" title="ti-harddrive"></i></li>
                      <li><i className="ti-gift" title="ti-gift"></i></li>
                      <li><i className="ti-game" title="ti-game"></i></li>
                      <li><i className="ti-filter" title="ti-filter"></i></li>
                      <li><i className="ti-files" title="ti-files"></i></li>
                      <li><i className="ti-file" title="ti-file"></i></li>
                      <li><i className="ti-zip" title="ti-zip"></i></li>
                      <li><i className="ti-folder" title="ti-folder"></i></li>
                      <li><i className="ti-envelope" title="ti-envelope"></i></li>
                      <li><i className="ti-dashboard" title="ti-dashboard"></i></li>
                      <li><i className="ti-cloud" title="ti-cloud"></i></li>
                      <li><i className="ti-cloud-up" title="ti-cloud-up"></i></li>
                      <li><i className="ti-cloud-down" title="ti-cloud-down"></i></li>
                      <li><i className="ti-clipboard" title="ti-clipboard"></i></li>
                      <li><i className="ti-calendar" title="ti-calendar"></i></li>
                      <li><i className="ti-book" title="ti-book"></i></li>
                      <li><i className="ti-bell" title="ti-bell"></i></li>
                      <li><i className="ti-basketball" title="ti-basketball"></i></li>
                      <li><i className="ti-bar-chart" title="ti-bar-chart"></i></li>
                      <li><i className="ti-bar-chart-alt" title="ti-bar-chart-alt"></i></li>
                      <li><i className="ti-archive" title="ti-archive"></i></li>
                      <li><i className="ti-anchor" title="ti-anchor"></i></li>
                      <li><i className="ti-alert" title="ti-alert"></i></li>
                      <li><i className="ti-alarm-clock" title="ti-alarm-clock"></i></li>
                      <li><i className="ti-agenda" title="ti-agenda"></i></li>
                      <li><i className="ti-write" title="ti-write"></i></li>
                      <li><i className="ti-wallet" title="ti-wallet"></i></li>
                      <li><i className="ti-video-clapper" title="ti-video-clapper"></i></li>
                      <li><i className="ti-video-camera" title="ti-video-camera"></i></li>
                      <li><i className="ti-vector" title="ti-vector"></i></li>
                      <li><i className="ti-support" title="ti-support"></i></li>
                      <li><i className="ti-stamp" title="ti-stamp"></i></li>
                      <li><i className="ti-slice" title="ti-slice"></i></li>
                      <li><i className="ti-shortcode" title="ti-shortcode"></i></li>
                      <li><i className="ti-receipt" title="ti-receipt"></i></li>
                      <li><i className="ti-pin2" title="ti-pin2"></i></li>
                      <li><i className="ti-pin-alt" title="ti-pin-alt"></i></li>
                      <li><i className="ti-pencil-alt2" title="ti-pencil-alt2"></i></li>
                      <li><i className="ti-eraser" title="ti-eraser"></i></li>
                      <li><i className="ti-more" title="ti-more"></i></li>
                      <li><i className="ti-more-alt" title="ti-more-alt"></i></li>
                      <li><i className="ti-microphone-alt" title="ti-microphone-alt"></i></li>
                      <li><i className="ti-magnet" title="ti-magnet"></i></li>
                      <li><i className="ti-line-double" title="ti-line-double"></i></li>
                      <li><i className="ti-line-dotted" title="ti-line-dotted"></i></li>
                      <li><i className="ti-line-dashed" title="ti-line-dashed"></i></li>
                      <li><i className="ti-ink-pen" title="ti-ink-pen"></i></li>
                      <li><i className="ti-info-alt" title="ti-info-alt"></i></li>
                      <li><i className="ti-help-alt" title="ti-help-alt"></i></li>
                      <li><i className="ti-headphone-alt" title="ti-headphone-alt"></i></li>
                      <li><i className="ti-gallery" title="ti-gallery"></i></li>
                      <li><i className="ti-face-smile" title="ti-face-smile"></i></li>
                      <li><i className="ti-face-sad" title="ti-face-sad"></i></li>
                      <li><i className="ti-credit-card" title="ti-credit-card"></i></li>
                      <li><i className="ti-comments-smiley" title="ti-comments-smiley"></i></li>
                      <li><i className="ti-time" title="ti-time"></i></li>
                      <li><i className="ti-share" title="ti-share"></i></li>
                      <li><i className="ti-share-alt" title="ti-share-alt"></i></li>
                      <li><i className="ti-rocket" title="ti-rocket"></i></li>
                      <li><i className="ti-new-window" title="ti-new-window"></i></li>
                      <li><i className="ti-rss" title="ti-rss"></i></li>
                      <li><i className="ti-rss-alt" title="ti-rss-alt"></i></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* /Chart */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemifyIconsComponent;