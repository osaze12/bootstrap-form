import React,{useState,useEffect}from"react";const Visibility=({name:e,handleShowPassword:t,props:a})=>{const[r,s]=useState(!1);return React.createElement(React.Fragment,null,React.createElement("div",{style:{position:"relative"}},React.createElement("div",{style:{position:"absolute",right:"5px",cursor:"pointer"},className:"_form-eye-container",onClick:()=>{s(e=>!e),t(e,!r)}},r?React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200",className:"form-password-eye"},React.createElement("path",{fill:"currentColor",d:"M669.727 273.516c-22.891-2.476-46.15-3.895-69.727-4.248c-103.025.457-209.823 25.517-310.913 73.536c-75.058 37.122-148.173 89.529-211.67 154.174C46.232 529.978 6.431 577.76 0 628.74c.76 44.162 48.153 98.67 77.417 131.764c59.543 62.106 130.754 113.013 211.67 154.174c2.75 1.335 5.51 2.654 8.276 3.955l-75.072 131.102l102.005 60.286l551.416-960.033l-98.186-60.008l-107.799 183.536zm232.836 65.479l-74.927 129.857c34.47 44.782 54.932 100.006 54.932 159.888c0 149.257-126.522 270.264-282.642 270.264c-6.749 0-13.29-.728-19.922-1.172l-49.585 85.84c22.868 2.449 45.99 4.233 69.58 4.541c103.123-.463 209.861-25.812 310.84-73.535c75.058-37.122 148.246-89.529 211.743-154.174c31.186-32.999 70.985-80.782 77.417-131.764c-.76-44.161-48.153-98.669-77.417-131.763c-59.543-62.106-130.827-113.013-211.743-154.175c-2.731-1.324-5.527-2.515-8.276-3.807zm-302.636 19.483c6.846 0 13.638.274 20.361.732l-58.081 100.561c-81.514 16.526-142.676 85.88-142.676 168.897c0 20.854 3.841 40.819 10.913 59.325c.008.021-.008.053 0 .074l-58.228 100.854c-34.551-44.823-54.932-100.229-54.932-160.182c.001-149.255 126.524-270.262 282.643-270.261zm168.969 212.035L638.013 797.271c81.076-16.837 141.797-85.875 141.797-168.603c0-20.474-4.086-39.939-10.914-58.155z"})):React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"10",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1200 1200",className:"form-password-eye"},React.createElement("path",{fill:"currentColor",d:"M779.843 599.925c0 95.331-80.664 172.612-180.169 172.612c-99.504 0-180.168-77.281-180.168-172.612c0-95.332 80.664-172.612 180.168-172.612c99.505-.001 180.169 77.281 180.169 172.612zM600 240.521c-103.025.457-209.814 25.538-310.904 73.557C214.038 351.2 140.89 403.574 77.394 468.219C46.208 501.218 6.431 549 0 599.981c.76 44.161 48.13 98.669 77.394 131.763c59.543 62.106 130.786 113.018 211.702 154.179C383.367 931.674 487.712 958.015 600 959.48c103.123-.464 209.888-25.834 310.866-73.557c75.058-37.122 148.243-89.534 211.74-154.179c31.185-32.999 70.962-80.782 77.394-131.763c-.76-44.161-48.13-98.671-77.394-131.764c-59.543-62.106-130.824-112.979-211.74-154.141C816.644 268.36 712.042 242.2 600 240.521zm-.076 89.248c156.119 0 282.675 120.994 282.675 270.251c0 149.256-126.556 270.25-282.675 270.25S317.249 749.275 317.249 600.02c0-149.257 126.556-270.251 282.675-270.251z"}))),React.createElement("input",Object.assign({},a,{style:{width:"100%"}}))))},buttonWordRegex=/button|btn/i,validInputTypwWordRegex=/text|textarea|number|select|email|password|checkbox/i,selectWordRegex=/select/i,enterWordRegex=/Enter|your/i,requiredWordRegex=/required/i,hasVisibilityRegex=/visibility/i,arrayRegex=/\[.*?.*?\]/gm,validEmailCheck=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,strongPasswordCheck=/^(?=(.*[a-z]){2,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$/,getProperWord=e=>{var t=null==e?void 0:e.split("");return t?t.map((e,t)=>e===(null==e?void 0:e.toUpperCase())?" "+(null==e?void 0:e.toUpperCase()):0===t?null==e?void 0:e.toUpperCase():e).join(""):e},removeUnnecessaryData=e=>{return null!=e&&delete e.confirmPassword,e},getSelectOptions=e=>{e=e.split("|").find(e=>arrayRegex.test(e));try{var t=String(e).replace(/(\w+:)|(\w+ :)/g,function(e){return'"'+e.substring(0,e.length-1)+'":'});return JSON.parse(t)}catch(e){return[]}},getPropValues=(e,t,a)=>{var r=null==(r=e.split("|"))?void 0:r[0],a=null==a?void 0:a[t];return{type:r,getFormLabel:a,className:a+"-class",required:!1!==requiredWordRegex.test(String(e)),placeholder:!1===enterWordRegex.test(String(e))?"":e.split("|").find(e=>enterWordRegex.test(e))}},passedValidation=(r,s,c)=>{return!Object.values(r).map((e,t)=>{e=requiredWordRegex.test(e);let a=Object.keys(r)[t];t=null==s?void 0:s[a];if("password"===a){if(!1===strongPasswordCheck.test(null==s?void 0:s.password))return c(e=>Object.assign(Object.assign({},e),{[a+"-error-message"]:"Must include at least one capital letter, number & special character "})),!1;c(e=>Object.assign(Object.assign({},e),{[a+"-error-message"]:""}))}if("email"===a){if(!1===validEmailCheck.test(null==s?void 0:s.email))return c(e=>Object.assign(Object.assign({},e),{[a+"-error-message"]:"Not a valid email"})),!1;c(e=>Object.assign(Object.assign({},e),{[a+"-error-message"]:""}))}if("confirmPassword"===a&&null!=s&&s.password){if(s[a]!==(null==s?void 0:s.password))return c(e=>Object.assign(Object.assign({},e),{[a+"-error-message"]:"password doesn't match"})),!1;c(e=>Object.assign(Object.assign({},e),{[a+"-error-message"]:""}))}return!e||!(!e||!t)||(c(e=>Object.assign(Object.assign({},e),{[a+"-error-message"]:getProperWord(a)+" cannot be empty"})),!1)}).includes(!1)},SelectBox=({props:e,data:t,name:a})=>{return React.createElement("select",Object.assign({},e,{defaultValue:"select"}),React.createElement("option",{value:"select"},"Select ",getProperWord(a)),null==(e=getSelectOptions(String(t)))?void 0:e.map(e=>React.createElement("option",{value:e.value},e.name)))};function BootstrapedForm({fields:t,preloadData:e,payload:a}){const[r,s]=useState([]),[n,c]=useState({}),[o,l]=useState({}),[i,d]=useState({}),[m,g]=useState(!1),u=Object.keys(t);let p=Object.values(t);useEffect(()=>{var e;"object"==typeof t&&(e=p.filter(e=>!0===validInputTypwWordRegex.test(e)),s(e))},[t]),useEffect(()=>{if(e&&"object"==typeof n)for(let r=0;r<Object.keys(e).length;r++){let t=Object.keys(e),a=Object.values(e);c(e=>Object.assign(Object.assign({},e),{[t[r]]:a[r]}))}},[e]);var b=buttonWordRegex.test(Object.values(t).join("")),v=Object.values(t).findIndex(e=>buttonWordRegex.test(e)),v=u[v];const R=e=>{let t=e.target.name,a=e.target.value,r=e.target.type;c(e=>Object.assign(Object.assign({},e),{[t]:"checkbox"===r&&"checkbox"===r&&!a||a}))};useEffect(()=>{t&&Object.keys(t).map(t=>{d({[t+"-error-message"]:""}),l(e=>Object.assign(Object.assign({},e),{[t+"-error-message"]:""}))})},[t]);const f=()=>{c({})},w=()=>{g(!1),f()},x=()=>{g(!1)},j=(t,e)=>{if(u.includes(t)){let r=u.findIndex(e=>e===t);if(r){let a=(null===p||void 0===p?void 0:p[r]).replace(e?"password":"text",e?"text":"password");s(e=>e.map((e,t)=>t===r?a:e))}}};return React.createElement("form",{className:"_bootstraped-form-container"},null==r?void 0:r.map((e,t)=>{var{type:a,getFormLabel:r,className:s,required:c,placeholder:l}=getPropValues(e,t,u)||{},s={className:"_"+s,type:a,required:c,placeholder:l,onChange:R,value:n[r]||"",name:r},a={name:r,props:s,handleShowPassword:j};return React.createElement("div",{key:t,className:"_form_inner_container"},React.createElement("label",{className:"_form-label"},getProperWord(r)),null!==selectWordRegex&&void 0!==selectWordRegex&&selectWordRegex.test(String(e))?React.createElement(React.Fragment,null,React.createElement(SelectBox,{props:s,name:r,data:e}),React.createElement("p",{className:"_error-message"},o[r+"-error-message"])):React.createElement(React.Fragment,null,null!==hasVisibilityRegex&&void 0!==hasVisibilityRegex&&hasVisibilityRegex.test(String(e))?React.createElement(Visibility,Object.assign({},a)):React.createElement("input",Object.assign({},s)),React.createElement("p",{className:"_error-message"},o[r+"-error-message"])))}),b&&React.createElement("button",{className:"_form-button",onClick:e=>{e.preventDefault(),passedValidation(t,n,l)&&(l(i),g(!0),a)&&(a(removeUnnecessaryData(n),w,x),g(!0))},disabled:m},m?"Please wait...":getProperWord(v)))}export{BootstrapedForm};
