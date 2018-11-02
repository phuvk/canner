(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2554:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n.n(o),i=n(4),s=n.n(i),a=n(3),u=n.n(a),p=n(5),c=n.n(p),l=n(1),h=n.n(l),d=n(0),f=n.n(d),v=n(9),m=n.n(v),y=n(2659),g=n.n(y),b=n(15),C=n(13),S=n.n(C),M=n(7),x=n.n(M),N=function(t){function e(){s()(this,e);var t=u()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.state={active:!1},t.onTouchStart=function(e){t.triggerEvent("TouchStart",!0,e)},t.onTouchMove=function(e){t.triggerEvent("TouchMove",!1,e)},t.onTouchEnd=function(e){t.triggerEvent("TouchEnd",!1,e)},t.onTouchCancel=function(e){t.triggerEvent("TouchCancel",!1,e)},t.onMouseDown=function(e){t.triggerEvent("MouseDown",!0,e)},t.onMouseUp=function(e){t.triggerEvent("MouseUp",!1,e)},t.onMouseLeave=function(e){t.triggerEvent("MouseLeave",!1,e)},t}return c()(e,t),x()(e,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(t,e,n){var o="on"+t,r=this.props.children;r.props[o]&&r.props[o](n),e!==this.state.active&&this.setState({active:e})}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.disabled,o=t.activeClassName,i=t.activeStyle,s=n?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},a=h.a.Children.only(e);if(!n&&this.state.active){var u=a.props,p=u.style,c=u.className;return!1!==i&&(i&&(p=r()({},p,i)),c=m()(c,o)),h.a.cloneElement(a,r()({className:c,style:p},s))}return h.a.cloneElement(a,s)}}]),e}(h.a.Component),w=N;N.defaultProps={disabled:!1};var E=function(t){function e(){return s()(this,e),u()(this,t.apply(this,arguments))}return c()(e,t),e.prototype.render=function(){var t=this.props,e=t.prefixCls,n=t.disabled,o=S()(t,["prefixCls","disabled"]);return h.a.createElement(w,{disabled:n,activeClassName:e+"-handler-active"},h.a.createElement("span",o))},e}(l.Component);E.propTypes={prefixCls:f.a.string,disabled:f.a.bool,onTouchStart:f.a.func,onTouchEnd:f.a.func,onMouseDown:f.a.func,onMouseUp:f.a.func,onMouseLeave:f.a.func};var T=E;function D(){}function V(t){t.preventDefault()}var U=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,O=function(t){function e(n){s()(this,e);var o=u()(this,t.call(this,n));P.call(o);var r=void 0;return r="value"in n?n.value:n.defaultValue,r=o.toNumber(r),o.state={inputValue:o.toPrecisionAsStep(r),value:r,focused:n.autoFocus},o}return c()(e,t),e.prototype.componentDidMount=function(){this.componentDidUpdate()},e.prototype.componentWillReceiveProps=function(t){if("value"in t){var e=this.state.focused?t.value:this.getValidValue(t.value,t.min,t.max);this.setState({value:e,inputValue:this.inputting?e:this.toPrecisionAsStep(e)})}var n="value"in t?t.value:this.state.value,o=this.props,r=o.onChange,i=o.max,s=o.min;"max"in t&&t.max!==i&&n>t.max&&r&&r(t.max),"min"in t&&t.min!==s&&n<t.min&&r&&r(t.min)},e.prototype.componentDidUpdate=function(){try{if(void 0!==this.cursorStart&&this.state.focused)if(this.partRestoreByAfter(this.cursorAfter)){if(this.currentValue===this.input.value)switch(this.lastKeyCode){case b.a.BACKSPACE:this.fixCaret(this.cursorStart-1,this.cursorStart-1);break;case b.a.DELETE:this.fixCaret(this.cursorStart+1,this.cursorStart+1)}}else{var t=this.cursorStart+1;this.cursorAfter?this.lastKeyCode===b.a.BACKSPACE?t=this.cursorStart-1:this.lastKeyCode===b.a.DELETE&&(t=this.cursorStart):t=this.input.value.length,this.fixCaret(t,t)}}catch(t){}this.lastKeyCode=null,this.pressingUpOrDown&&(this.props.focusOnUpDown&&this.state.focused&&document.activeElement!==this.input&&this.focus(),this.pressingUpOrDown=!1)},e.prototype.componentWillUnmount=function(){this.stop()},e.prototype.getCurrentValidValue=function(t){var e=t;return e=""===e?"":this.isNotCompleteNumber(e)?this.state.value:this.getValidValue(e),this.toNumber(e)},e.prototype.getRatio=function(t){var e=1;return t.metaKey||t.ctrlKey?e=.1:t.shiftKey&&(e=10),e},e.prototype.getValueFromEvent=function(t){var e=t.target.value.trim().replace(/。/g,".");return"decimalSeparator"in this.props&&(e=e.replace(this.props.decimalSeparator,".")),e},e.prototype.getValidValue=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.props.min,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.props.max,o=parseFloat(t,10);return isNaN(o)?t:(o<e&&(o=e),o>n&&(o=n),o)},e.prototype.setValue=function(t,e){var n=this.isNotCompleteNumber(parseFloat(t,10))?void 0:parseFloat(t,10),o=n!==this.state.value||""+n!=""+this.state.inputValue;"value"in this.props?this.setState({inputValue:this.toPrecisionAsStep(this.state.value)},e):this.setState({value:n,inputValue:this.toPrecisionAsStep(t)},e),o&&this.props.onChange(n)},e.prototype.getPrecision=function(t){if("precision"in this.props)return this.props.precision;var e=t.toString();if(e.indexOf("e-")>=0)return parseInt(e.slice(e.indexOf("e-")+2),10);var n=0;return e.indexOf(".")>=0&&(n=e.length-e.indexOf(".")-1),n},e.prototype.getMaxPrecision=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if("precision"in this.props)return this.props.precision;var n=this.props.step,o=this.getPrecision(e),r=this.getPrecision(n),i=this.getPrecision(t);return t?Math.max(i,o+r):o+r},e.prototype.getPrecisionFactor=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=this.getMaxPrecision(t,e);return Math.pow(10,n)},e.prototype.fixCaret=function(t,e){if(void 0!==t&&void 0!==e&&this.input&&this.input.value)try{var n=this.input.selectionStart,o=this.input.selectionEnd;t===n&&e===o||this.input.setSelectionRange(t,e)}catch(t){}},e.prototype.focus=function(){this.input.focus(),this.recordCursorPosition()},e.prototype.blur=function(){this.input.blur()},e.prototype.formatWrapper=function(t){return g()(t)?"-0":this.props.formatter?this.props.formatter(t):t},e.prototype.toPrecisionAsStep=function(t){if(this.isNotCompleteNumber(t)||""===t)return t;var e=Math.abs(this.getMaxPrecision(t));return 0===e?t.toString():isNaN(e)?t.toString():Number(t).toFixed(e)},e.prototype.isNotCompleteNumber=function(t){return isNaN(t)||""===t||null===t||t&&t.toString().indexOf(".")===t.toString().length-1},e.prototype.toNumber=function(t){return this.isNotCompleteNumber(t)?t:"precision"in this.props?Number(Number(t).toFixed(this.props.precision)):Number(t)},e.prototype.toNumberWhenUserInput=function(t){return(/\.\d*0$/.test(t)||t.length>16)&&this.state.focused?t:this.toNumber(t)},e.prototype.upStep=function(t,e){var n=this.props,o=n.step,r=n.min,i=this.getPrecisionFactor(t,e),s=Math.abs(this.getMaxPrecision(t,e)),a=void 0;return a="number"==typeof t?((i*t+i*o*e)/i).toFixed(s):r===-1/0?o:r,this.toNumber(a)},e.prototype.downStep=function(t,e){var n=this.props,o=n.step,r=n.min,i=this.getPrecisionFactor(t,e),s=Math.abs(this.getMaxPrecision(t,e)),a=void 0;return a="number"==typeof t?((i*t-i*o*e)/i).toFixed(s):r===-1/0?-o:r,this.toNumber(a)},e.prototype.step=function(t,e){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments[3];this.stop(),e&&(e.persist(),e.preventDefault());var i=this.props;if(!i.disabled){var s=this.getCurrentValidValue(this.state.inputValue)||0;if(!this.isNotCompleteNumber(s)){var a=this[t+"Step"](s,o),u=a>i.max||a<i.min;a>i.max?a=i.max:a<i.min&&(a=i.min),this.setValue(a),this.setState({focused:!0}),u||(this.autoStepTimer=setTimeout(function(){n[t](e,o,!0)},r?200:600))}}},e.prototype.render=function(){var t,e=r()({},this.props),n=e.prefixCls,o=e.disabled,i=e.readOnly,s=e.useTouch,a=m()(((t={})[n]=!0,t[e.className]=!!e.className,t[n+"-disabled"]=o,t[n+"-focused"]=this.state.focused,t)),u="",p="",c=this.state.value;if(c||0===c)if(isNaN(c))u=n+"-handler-up-disabled",p=n+"-handler-down-disabled";else{var l=Number(c);l>=e.max&&(u=n+"-handler-up-disabled"),l<=e.min&&(p=n+"-handler-down-disabled")}var d={};for(var f in e)!e.hasOwnProperty(f)||"data-"!==f.substr(0,5)&&"aria-"!==f.substr(0,5)&&"role"!==f||(d[f]=e[f]);var v=!e.readOnly&&!e.disabled,y=this.getInputDisplayValue(),g=void 0,b=void 0;s?(g={onTouchStart:v&&!u?this.up:D,onTouchEnd:this.stop},b={onTouchStart:v&&!p?this.down:D,onTouchEnd:this.stop}):(g={onMouseDown:v&&!u?this.up:D,onMouseUp:this.stop,onMouseLeave:this.stop},b={onMouseDown:v&&!p?this.down:D,onMouseUp:this.stop,onMouseLeave:this.stop});var C=this.formatWrapper(y);"decimalSeparator"in this.props&&(C=C.toString().replace(".",this.props.decimalSeparator));var S=!!u||o||i,M=!!p||o||i;return h.a.createElement("div",{className:a,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseOver:e.onMouseOver,onMouseOut:e.onMouseOut},h.a.createElement("div",{className:n+"-handler-wrap"},h.a.createElement(T,r()({ref:this.saveUp,disabled:S,prefixCls:n,unselectable:"unselectable"},g,{role:"button","aria-label":"Increase Value","aria-disabled":!!S,className:n+"-handler "+n+"-handler-up "+u}),this.props.upHandler||h.a.createElement("span",{unselectable:"unselectable",className:n+"-handler-up-inner",onClick:V})),h.a.createElement(T,r()({ref:this.saveDown,disabled:M,prefixCls:n,unselectable:"unselectable"},b,{role:"button","aria-label":"Decrease Value","aria-disabled":!!M,className:n+"-handler "+n+"-handler-down "+p}),this.props.downHandler||h.a.createElement("span",{unselectable:"unselectable",className:n+"-handler-down-inner",onClick:V}))),h.a.createElement("div",{className:n+"-input-wrap",role:"spinbutton","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":c},h.a.createElement("input",r()({required:e.required,type:e.type,placeholder:e.placeholder,onClick:e.onClick,onMouseUp:this.onMouseUp,className:n+"-input",tabIndex:e.tabIndex,autoComplete:"off",onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:v?this.onKeyDown:D,onKeyUp:v?this.onKeyUp:D,autoFocus:e.autoFocus,maxLength:e.maxLength,readOnly:e.readOnly,disabled:e.disabled,max:e.max,min:e.min,step:e.step,name:e.name,id:e.id,onChange:this.onChange,ref:this.saveInput,value:C,pattern:e.pattern},d))))},e}(h.a.Component);O.propTypes={value:f.a.oneOfType([f.a.number,f.a.string]),defaultValue:f.a.oneOfType([f.a.number,f.a.string]),focusOnUpDown:f.a.bool,autoFocus:f.a.bool,onChange:f.a.func,onKeyDown:f.a.func,onKeyUp:f.a.func,prefixCls:f.a.string,tabIndex:f.a.oneOfType([f.a.string,f.a.number]),disabled:f.a.bool,onFocus:f.a.func,onBlur:f.a.func,readOnly:f.a.bool,max:f.a.number,min:f.a.number,step:f.a.oneOfType([f.a.number,f.a.string]),upHandler:f.a.node,downHandler:f.a.node,useTouch:f.a.bool,formatter:f.a.func,parser:f.a.func,onMouseEnter:f.a.func,onMouseLeave:f.a.func,onMouseOver:f.a.func,onMouseOut:f.a.func,onMouseUp:f.a.func,precision:f.a.number,required:f.a.bool,pattern:f.a.string,decimalSeparator:f.a.string},O.defaultProps={focusOnUpDown:!0,useTouch:!1,prefixCls:"rc-input-number",min:-U,step:1,style:{},onChange:D,onKeyDown:D,onFocus:D,onBlur:D,parser:function(t){return t.replace(/[^\w\.-]+/g,"")},required:!1};var P=function(){var t=this;this.onKeyDown=function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];var i=t.props.onKeyDown;if(e.keyCode===b.a.UP){var s=t.getRatio(e);t.up(e,s),t.stop()}else if(e.keyCode===b.a.DOWN){var a=t.getRatio(e);t.down(e,a),t.stop()}t.recordCursorPosition(),t.lastKeyCode=e.keyCode,i&&i.apply(void 0,[e].concat(o))},this.onKeyUp=function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];var i=t.props.onKeyUp;t.stop(),t.recordCursorPosition(),i&&i.apply(void 0,[e].concat(o))},this.onChange=function(e){t.state.focused&&(t.inputting=!0);var n=t.props.parser(t.getValueFromEvent(e));t.setState({inputValue:n}),t.props.onChange(t.toNumberWhenUserInput(n))},this.onMouseUp=function(){var e=t.props.onMouseUp;t.recordCursorPosition(),e&&e.apply(void 0,arguments)},this.onFocus=function(){var e;t.setState({focused:!0}),(e=t.props).onFocus.apply(e,arguments)},this.onBlur=function(e){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];t.inputting=!1,t.setState({focused:!1});var i=t.getCurrentValidValue(t.state.inputValue);e.persist(),t.setValue(i,function(){var n;(n=t.props).onBlur.apply(n,[e].concat(o))})},this.getInputDisplayValue=function(){var e=t.state,n=e.focused,o=e.inputValue,r=e.value,i=void 0;return void 0!==(i=n?o:t.toPrecisionAsStep(r))&&null!==i||(i=""),i},this.recordCursorPosition=function(){try{t.cursorStart=t.input.selectionStart,t.cursorEnd=t.input.selectionEnd,t.currentValue=t.input.value,t.cursorBefore=t.input.value.substring(0,t.cursorStart),t.cursorAfter=t.input.value.substring(t.cursorEnd)}catch(t){}},this.restoreByAfter=function(e){if(void 0===e)return!1;var n=t.input.value,o=n.lastIndexOf(e);return-1!==o&&(o+e.length===n.length&&(t.fixCaret(o,o),!0))},this.partRestoreByAfter=function(e){return void 0!==e&&Array.prototype.some.call(e,function(n,o){var r=e.substring(o);return t.restoreByAfter(r)})},this.stop=function(){t.autoStepTimer&&clearTimeout(t.autoStepTimer)},this.down=function(e,n,o){t.pressingUpOrDown=!0,t.step("down",e,n,o)},this.up=function(e,n,o){t.pressingUpOrDown=!0,t.step("up",e,n,o)},this.saveUp=function(e){t.upHandler=e},this.saveDown=function(e){t.downHandler=e},this.saveInput=function(e){t.input=e}};e.default=O},2659:function(t,e,n){"use strict";t.exports=function(t){return 0===t&&1/t==-1/0}}}]);