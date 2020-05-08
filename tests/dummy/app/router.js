import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('voca-capitalize');
  this.route('voca-decapitalize');
  this.route('voca-kebab-case');
  this.route('voca-lower-case');
  this.route('voca-snake-case');
  this.route('voca-swap-case');
  this.route('voca-title-case');
  this.route('voca-upper-case');
  this.route('voca-count');
  this.route('voca-count-graphemes');
  this.route('voca-count-substrings');
  this.route('voca-count-where');
  this.route('voca-count-words');
  this.route('voca-escape-html');
  this.route('voca-escape-reg-exp');
  this.route('voca-unescape-html');
  this.route('voca-sprintf');
  this.route('voca-vprintf');
  this.route('voca-index-of');
  this.route('voca-last-index-of');
  this.route('voca-search');
  this.route('voca-char-at');
  this.route('voca-code-point-at');
  this.route('voca-first');
  this.route('voca-grapheme-at');
  this.route('voca-last');
  this.route('voca-prune');
  this.route('voca-slice');
  this.route('voca-substr');
  this.route('voca-substring');
  this.route('voca-truncate');
  this.route('voca-insert');
  this.route('voca-latinise');
  this.route('voca-pad');
  this.route('voca-pad-left');
  this.route('voca-pad-right');
  this.route('voca-repeat');
  this.route('voca-replace');
  this.route('voca-replace-all');
  this.route('voca-reverse');
  this.route('voca-reverse-grapheme');
  this.route('voca-slugify');
  this.route('voca-splice');
  this.route('voca-tr');
  this.route('voca-trim');
  this.route('voca-trim-left');
  this.route('voca-trim-right');
  this.route('voca-word-wrap');
  this.route('voca-ends-with');
  this.route('voca-includes');
  this.route('voca-is-alpha');
  this.route('voca-is-alpha-digit');
  this.route('voca-is-blank');
  this.route('voca-is-digit');
  this.route('voca-is-empty');
  this.route('voca-is-lower-case');
  this.route('voca-is-numeric');
  this.route('voca-is-string');
  this.route('voca-is-upper-case');
  this.route('voca-matches');
  this.route('voca-starts-with');
  this.route('voca-chars');
  this.route('voca-code-points');
  this.route('voca-graphemes');
  this.route('voca-split');
  this.route('voca-words');
  this.route('voca-strip-bom');
  this.route('voca-strip-tags');
  this.route('voca-no-conflict');
  this.route('voca-camel-case');
});
