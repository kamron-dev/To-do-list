(()=>{"use strict";const t=(t,e,n,o="important",i=!1)=>({id:Date.now(),title:t,desc:e,dueDate:n,priority:o,completed:i}),e={default:[],home:[],work:[]},n=(t,n="default")=>(e[n].push(t),e),o=t=>(e[t]=[],e);function i(t){const n=document.querySelector("#projects-div"),c=Object.keys(t);n.innerHTML="";const r=document.createElement("h3");return r.textContent="Projects",n.appendChild(r),c.forEach((t=>{const e=document.createElement("button");e.classList.add("projects-list-button"),e.textContent=t,n.appendChild(e)})),function(t,n){const c=document.querySelector("#projects-div"),r=document.createElement("button");r.textContent="New project +",r.setAttribute("id","add-new-project-btn"),c.appendChild(r),r.addEventListener("click",(()=>{const t=document.createElement("form");t.classList.add("input-field");const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("id","project-input"),u.setAttribute("maxlength","24"),u.setAttribute("placeholder","Enter project name"),u.setAttribute("autocomplete","off");const a=document.createElement("button");a.setAttribute("type","button"),a.setAttribute("id","add-project-btn"),a.textContent="Add";const l=document.createElement("button");l.setAttribute("type","button"),l.setAttribute("id","cancel-add-project-btn"),l.textContent="Cancel",t.appendChild(u),t.appendChild(a),t.appendChild(l),c.appendChild(t),r.setAttribute("disabled",!0),function(t){const n=document.getElementById("add-project-btn"),c=document.querySelector("#cancel-add-project-btn");n.addEventListener("click",(()=>{const n=document.getElementById("project-input").value;o(n),console.table(e),i(t),d(t)})),c.addEventListener("click",(()=>{const t=document.querySelector(".input-field"),e=document.querySelector("#add-new-project-btn");t&&t.remove(),e.removeAttribute("disabled")}))}(n)}))}(0,t),n}function d(e){document.querySelectorAll(".projects-list-button").forEach((o=>{o.addEventListener("click",(()=>{mainHeader.textContent=o.textContent,console.log(e[o.textContent]),function(){const e=document.createElement("button");e.setAttribute("id","new-ToDo-btn"),e.textContent="add",main.appendChild(e),e.addEventListener("click",(()=>{const e=document.createElement("div");e.setAttribute("id","input-Div"),main.appendChild(e),c("input-Div","form",{id:"input-form"}),c("input-form","label",{for:"title-input"}).textContent="Title",c("input-form","input",{type:"text",id:"title-input"}),c("input-form","label",{for:"desc-input"}).textContent="Description",c("input-form","textarea",{id:"desc-input",rows:"5"}),c("input-form","label",{for:"dueDate"}).textContent="Due date",c("input-form","input",{type:"date",id:"dueDate"}),c("input-form","label",{for:"priority"}).textContent="Priority",c("input-form","select",{id:"priority"}),c("priority","option",{value:"very"}).textContent="Very Important",c("priority","option",{value:"important"}).textContent="Important",c("priority","option",{value:"not"}).textContent="Not Important",c("input-form","button",{id:"addToDoBtn",type:"button"}).textContent="Add To-do",c("input-form","button",{id:"cancelBtn",type:"button"}).textContent="Cancel",function(e){const o=document.getElementById("addToDoBtn"),d=document.getElementById("cancelBtn"),c=document.getElementById("title-input"),r=document.getElementById("desc-input"),u=document.getElementById("dueDate"),a=document.getElementById("priority"),l=document.getElementById("mainHeader"),m=document.getElementById("input-Div");o.addEventListener("click",(()=>{n(t(c.value,r.value,u.value,a.value),l.textContent),i(undefined),m.remove()})),d.addEventListener("click",(()=>{m.remove()}))}()}))}();const d=document.createElement("ul");e[o.textContent].forEach((t=>{const e=document.createElement("li");e.classList.add("li-element"),Object.keys(t).forEach((n=>{if("title"===n||"desc"===n||"dueDate"===n){const o=document.createElement("p");o.innerHTML=t[n],e.appendChild(o)}})),d.appendChild(e)})),mainDiv.innerHTML="",mainDiv.appendChild(d)}))}))}function c(t,e,n){let o=document.createElement(e);for(let t in n)n.hasOwnProperty(t)&&o.setAttribute(t,n[t]);return document.getElementById(t).appendChild(o),o}console.log(e);const r=t("Milk","Buy some milk for the cat","12-02-2024","very important"),u=t("Writing","Write some text to my book","14-04-2024","not important",!0),a=t("Buy cat food","Buy some kitekat","04-05-2024","very imortant");n(r),n(u),n(a),function(t){const e=document.getElementById("main"),n=document.createElement("h1");n.textContent="Lika i ya",n.setAttribute("id","mainHeader"),e.appendChild(n)}(),function(){const t=document.getElementById("main"),e=document.createElement("div");e.setAttribute("id","mainDiv"),t.appendChild(e)}(),i(e),d(e)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVkwQyxHQUVkQSxDQUNYLENBNVJBdkIsUUFBUVEsSUFBSTlDLEdDTlosTUFBTStELEVBQVF4RSxFQUFXLE9BQVEsNEJBQTZCLGFBQWMsa0JBQ3RFeUUsRUFBWXpFLEVBQVcsVUFBVyw2QkFBOEIsYUFBYyxpQkFBaUIsR0FDL0YwRSxFQUFZMUUsRUFBVyxlQUFnQixtQkFBb0IsYUFBYyxpQkFJL0VVLEVBQVc4RCxHQUNYOUQsRUFBVytELEdBQ1gvRCxFQUFXZ0UsR0R3QkosU0FBc0JDLEdBQ3pCLE1BQU1uQixFQUFPckMsU0FBU3dCLGVBQWUsUUFDL0JXLEVBQWFuQyxTQUFTTyxjQUFjLE1BQzFDNEIsRUFBVzNCLFlDdkJFLFlEd0JiMkIsRUFBV2xCLGFBQWEsS0FBTSxjQUM5Qm9CLEVBQUs1QixZQUFZMEIsRUFJckIsQ0M3QklzQixHRGRHLFdBQ0gsTUFBTXBCLEVBQU9yQyxTQUFTd0IsZUFBZSxRQUMvQnVCLEVBQVUvQyxTQUFTTyxjQUFjLE9BQ3ZDd0MsRUFBUTlCLGFBQWEsS0FBTSxXQUMzQm9CLEVBQUs1QixZQUFZc0MsRUFHckIsQ0NRSVcsR0FDQTdELEVBQXFDUCxHQUNyQ3dDLEVBQWdCeEMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL2NyZWF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9GYWN0b3J5IGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0by1kbyBvYmplY3RzXG5leHBvcnQgY29uc3QgY3JlYXRlVG9EbyA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkgPSBcImltcG9ydGFudFwiLCBjb21wbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkIDogRGF0ZS5ub3coKSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2MsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LCBcbiAgICAgICAgY29tcGxldGVkXG4gICAgfVxufTtcblxuXG4vLyBPYmogdGhhdCBzdG9yZXMgdG8tZG9zIGFycmF5cyBhbmQgcHJvamVjdCBuYW1lc1xuXG5leHBvcnQgY29uc3QgdG9Eb3NPYmogPSB7XG4gICAgXCJkZWZhdWx0XCI6IFtdLFxuICAgIFwiaG9tZVwiOiBbXSxcbiAgICBcIndvcmtcIjogW10sXG59O1xuXG4vLyBGdW5jdGlvbiB0byBhZGQgdG8tZG9zIHRvIHRvRG9zIG9iamVjdFxuXG5leHBvcnQgY29uc3QgYWRkVG9Eb09iaiA9ICh0b0RvLCBwcm9qZWN0ID0gXCJkZWZhdWx0XCIpID0+IHtcbiAgICB0b0Rvc09ialtwcm9qZWN0XS5wdXNoKHRvRG8pO1xuICAgIHJldHVybiB0b0Rvc09iajtcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCBuZXcgcHJvamVjdHNcblxuZXhwb3J0IGNvbnN0IGFkZE5ld1Byb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICB0b0Rvc09ialtwcm9qZWN0TmFtZV0gPSBbXTtcbiAgICByZXR1cm4gdG9Eb3NPYmo7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyB0b0Rvc09iaiwgYWRkTmV3UHJvamVjdCwgYWRkVG9Eb09iaiwgY3JlYXRlVG9EbyB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcblxuLy9GdW5jdGlvbiB0byBjcmVhdGUgdGhlIGRpdiBpbnNpZGUgdGhlIG1haW4gcGFydCBvZiB0aGUgc2NyZWVuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFpbkRpdigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluRGl2XCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgXG4gICAgcmV0dXJuIHsgbWFpbiwgbWFpbkRpdiB9XG59O1xuY29uc29sZS5sb2codG9Eb3NPYmopO1xuLy8gRnVuY3Rpb24gdG8gcmVuZGVyIHRoZSBwcm9qZWN0cyB0byB0aGUgRE9NIGFzIGJ1dHRvbnMgKGludG8gdGhlIHByb2plY3RzLWRpdiksIGV4cG9ydGVkIHRvIHVzZSBpbiBpbmRleC5qc1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnNGb3JFYWNoUHJvamVjdE9uU2lkZWJhcihwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1kaXZcIik7XG4gICAgY29uc3QgcHJvamVjdHNLZXlzID0gT2JqZWN0LmtleXMocHJvamVjdHMpO1xuXG4gICAgLy9DbGVhciBvdXQgdGhlIHByb2plY3RzIGRpdiBmaXJzdCBBTFdBWVMgQ0xFQVIgT1VUIEJFRk9SRSBBRERJTkcgTkVXXG4gICAgcHJvamVjdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICAgIC8vQ3JlYXRpbmcgYnV0dG9ucyBmcm9tIHRvRG9zT2JqIGtleXNcbiAgICBwcm9qZWN0c0tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWxpc3QtYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBrZXk7XG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uKFwiTmV3IHByb2plY3QgK1wiLCBwcm9qZWN0cylcbiAgICByZXR1cm4gcHJvamVjdHNEaXY7XG59O1xuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIG1haW5EaXYgaGVhZGVyIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIobmFtZSkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBtYWluSGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbkhlYWRlclwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuXG4gICAgcmV0dXJuIHsgbWFpbiwgbWFpbkhlYWRlciB9O1xuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgLy8gQ2hvb3NpbmcgYWxsIHRoZSBidXR0b25zIHdpdGggcHJvamVjdG5hbWVzIFxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RzLWxpc3QtYnV0dG9uXCIpO1xuICAgIC8vIEl0ZXJhdGluZyB0aHJvdWdoIHRob3NlIGJ1dHRvbnNcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgLy8gYWRkaW5nIGNsaWNrIGV2ZW50IGxpc3RlbmVycyB0byB0aGVtXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gdXBkYXRpbmcgdGhlIGhlYWRlclxuICAgICAgICAgICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9IGJ1dHRvbi50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2J1dHRvbi50ZXh0Q29udGVudF0pO1xuICAgICAgICAgICAgLy8gY3JlYXRpbmcgdGhlIGJ1dHRvbiB0aGF0IHNob3dzIHVwIGFuIGlucHV0IGZvcm1cbiAgICAgICAgICAgIGFkZE5ld1RvRG9CdG4ocHJvamVjdHMpO1xuICAgICAgICAgICAgLy8gY3JlYXRpbmcgYSB1bCBlbGVtZW50IHRvIGhvbGQgYWxsIHRoZSB0b0RvcyBpbnNpZGVcbiAgICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICAgICAgLy8gaXRlcmF0aW5nIHRocm91Z2ggZWFjaCBwcm9qZWN0cyBhcnJheSB0aGF0IGhvbGQgdG9EbyBvYmplY3RzXG4gICAgICAgICAgICBwcm9qZWN0c1tidXR0b24udGV4dENvbnRlbnRdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jcmVhdGluZyBhIGxpIGVsZW1lbnQgdG8gaG9sZCBlYWNoIHRvRG8gb2JqZWN0c1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJsaS1lbGVtZW50XCIpO1xuICAgICAgICAgICAgICAgIC8vIGl0ZXJhdGluZyB0aHJvdWdoIGVhY2ggdG9EbyBvYmoga2V5XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUga2V5IGVxdWFscyBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcInRpdGxlXCIgfHwga2V5ID09PSBcImRlc2NcIiB8fCBrZXkgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBwIGVsZW1lbnQgdG8gaG9sZCB0aGUgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHV0dGluZyB0aGUgdmFsdWUgb2YgdGhlIGtleSBpbnNpZGUgdGhlIHAgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBpdGVtW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmRpbmcgdGhlIHAgZWxlbWVudCB3aXRoIGluZm8gdG8gdGhlIGxpIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyBhcHBlbmRpbmcgdGhlIGxpIGVsZW1lbnQgdG8gdGhlIHBhcmVudCB1bCBlbGVtZW50IGNyZWF0ZWQgb24gbGluZSA3OFxuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBjbGVhcmluZyBvdXQgdGhlIG1haW4gZGl2IGJlZm9yZSByZW5kZXJpbmcgdGhlIGNvbnRlbnQgaW5zaWRlXG4gICAgICAgICAgICBtYWluRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAvL2FwcGVuZGluZyB0aGUgdWwgaW5zaWRlIHRoZSBtYWluRGl2XG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0QnV0dG9uKGJ1dHRvbk5hbWUsIHByb2plY3RzKSB7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWRpdlwiKTtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvbk5hbWU7XG4gICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLW5ldy1wcm9qZWN0LWJ0blwiKVxuICAgIFxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZmllbGRcIik7XG5cbiAgICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgaW5wdXRGaWVsZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtaW5wdXRcIik7XG4gICAgICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMjRcIik7XG4gICAgICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciBwcm9qZWN0IG5hbWVcIik7XG4gICAgICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIsIFwib2ZmXCIpO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdC1idG5cIik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtYWRkLXByb2plY3QtYnRuXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBcbiAgICAgICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICBoYW5kbGVOZXdQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgfSlcbiAgICBcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZU5ld1Byb2plY3RzKHByb2plY3RzKSB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtYWRkLXByb2plY3QtYnRuXCIpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0dGVkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgYWRkTmV3UHJvamVjdChpbnB1dHRlZE5hbWUpO1xuICAgICAgICBjb25zb2xlLnRhYmxlKHRvRG9zT2JqKTtcbiAgICAgICAgY3JlYXRlQnV0dG9uc0ZvckVhY2hQcm9qZWN0T25TaWRlYmFyKHByb2plY3RzKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKHByb2plY3RzKTtcbiAgICBcbiAgICB9KTtcbiAgICBcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZmllbGRcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLW5ldy1wcm9qZWN0LWJ0blwiKTtcbiAgICAgICAgaWYgKGZvcm0pIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcblxuICAgIH0pXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3VG9Eb0J0bigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1Ub0RvLWJ0blwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcImFkZFwiO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5wdXQtRGl2XCIpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG5ld0Rpdik7XG5cbiAgICAgICAgY3JlYXRlRWxBbmRBcHBlbmQoXCJpbnB1dC1EaXZcIiwgXCJmb3JtXCIsIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCJpbnB1dC1mb3JtXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBjcmVhdGVFbEFuZEFwcGVuZChcImlucHV0LWZvcm1cIiwgXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICBcImZvclwiOiBcInRpdGxlLWlucHV0XCIsXG5cbiAgICAgICAgfSk7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG5cbiAgICAgICAgXG4gICAgICAgIGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcImlucHV0XCIsIHsgIC8vVGl0bGUgaW5wdXRcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgIFwiaWRcIjogXCJ0aXRsZS1pbnB1dFwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcImxhYmVsXCIsIHtcbiAgICAgICAgICAgIFwiZm9yXCI6IFwiZGVzYy1pbnB1dFwiXG4gICAgICAgIH0pO1xuICAgICAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbiAgICAgICAgXG4gICAgICAgIGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCJkZXNjLWlucHV0XCIsXG4gICAgICAgICAgICBcInJvd3NcIjogXCI1XCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcImxhYmVsXCIsIHtcbiAgICAgICAgICAgIFwiZm9yXCI6IFwiZHVlRGF0ZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlXCI7XG5cbiAgICAgICAgY3JlYXRlRWxBbmRBcHBlbmQoXCJpbnB1dC1mb3JtXCIsIFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgXCJpZFwiOiBcImR1ZURhdGVcIixcbiAgICAgICAgICAgIC8vcmVxdWlyZWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcImxhYmVsXCIsIHtcbiAgICAgICAgICAgIFwiZm9yXCI6IFwicHJpb3JpdHlcIlxuICAgICAgICB9KTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcblxuICAgICAgICBjcmVhdGVFbEFuZEFwcGVuZChcImlucHV0LWZvcm1cIiwgXCJzZWxlY3RcIiwge1xuICAgICAgICAgICAgXCJpZFwiOiBcInByaW9yaXR5XCJcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB2ZXJ5ID0gY3JlYXRlRWxBbmRBcHBlbmQoXCJwcmlvcml0eVwiLCBcIm9wdGlvblwiLCB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwidmVyeVwiLFxuXG4gICAgICAgIH0pO1xuICAgICAgICB2ZXJ5LnRleHRDb250ZW50ID0gXCJWZXJ5IEltcG9ydGFudFwiO1xuXG4gICAgICAgIGNvbnN0IGltcG9ydGFudCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwicHJpb3JpdHlcIiwgXCJvcHRpb25cIiwge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImltcG9ydGFudFwiLFxuXG4gICAgICAgIH0pO1xuICAgICAgICBpbXBvcnRhbnQudGV4dENvbnRlbnQgPSBcIkltcG9ydGFudFwiO1xuXG4gICAgICAgIGNvbnN0IG5vdCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwicHJpb3JpdHlcIiwgXCJvcHRpb25cIiwge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIm5vdFwiLFxuXG4gICAgICAgIH0pO1xuICAgICAgICBub3QudGV4dENvbnRlbnQgPSBcIk5vdCBJbXBvcnRhbnRcIjtcblxuICAgICAgICAvLyBjcmVhdGluZyB0d28gYnV0dG9ucyBcblxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBjcmVhdGVFbEFuZEFwcGVuZChcImlucHV0LWZvcm1cIiwgXCJidXR0b25cIiwge1xuICAgICAgICAgICAgXCJpZFwiOiBcImFkZFRvRG9CdG5cIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgICAgIH0pO1xuICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUby1kb1wiO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICBcImlkXCI6IFwiY2FuY2VsQnRuXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgICAgICB9KTtcbiAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgXG4gICAgICAgIGhhbmRsZUJ1dHRvbnMoKTtcblxuICAgIH0pO1xuXG4gICAgXG59O1xuXG5mdW5jdGlvbiBoYW5kbGVCdXR0b25zKHByb2plY3RzKSB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb0RvQnRuXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsQnRuXCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlLWlucHV0XCIpO1xuICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2MtaW5wdXRcIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkhlYWRlclwiKTtcblxuICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1EaXZcIik7XG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWRkVG9Eb09iaihjcmVhdGVUb0RvKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkdWVEYXRlLnZhbHVlLCBwcmlvcml0eS52YWx1ZSksIHByb2plY3QudGV4dENvbnRlbnQpO1xuICAgICAgICBjcmVhdGVCdXR0b25zRm9yRWFjaFByb2plY3RPblNpZGViYXIocHJvamVjdHMpXG4gICAgICAgIGlucHV0RGl2LnJlbW92ZSgpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaW5wdXREaXYucmVtb3ZlKCk7XG4gICAgfSlcbn07XG5cblxuXG4vL2hlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgZWxlbWVudHMgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBwYXJlbnQgZWxlbWVudFxuZnVuY3Rpb24gY3JlYXRlRWxBbmRBcHBlbmQocGFyZW50RWxJZCwgdHlwZSwgYXR0cmlidXRlcykgeyBcbiAgICBsZXQgbmV3RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIFxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG5ld0VsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHBhcmVudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RWxJZCk7XG5cbiAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChuZXdFbCk7XG4gICAgXG4gICAgcmV0dXJuIG5ld0VsO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCB7IGNyZWF0ZVRvRG8sIHRvRG9zT2JqLCBhZGRUb0RvT2JqIH0gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkRpdiwgY3JlYXRlQnV0dG9uc0ZvckVhY2hQcm9qZWN0T25TaWRlYmFyLCBjcmVhdGVIZWFkZXIsIGRpc3BsYXlQcm9qZWN0cywgYWRkTmV3VG9Eb0J0biB9IGZyb20gXCIuL1VJXCI7XG4vLyBpbXBvcnQgeyBhbGVydERhdGUgfSBmcm9tIFwiLi9kYXRlc1wiO1xuXG4vLyBjcmVhdGluZyB0aHJlZSBuZXcgdG9kb3Mgd2l0aCBjcmVhdGVUb0RvIGZ1bmN0aW9uXG5jb25zdCBuZXdEbyA9IGNyZWF0ZVRvRG8oXCJNaWxrXCIsIFwiQnV5IHNvbWUgbWlsayBmb3IgdGhlIGNhdFwiLCBcIjEyLTAyLTIwMjRcIiwgXCJ2ZXJ5IGltcG9ydGFudFwiKTtcbmNvbnN0IGFub3RoZXJEbyA9IGNyZWF0ZVRvRG8oXCJXcml0aW5nXCIsIFwiV3JpdGUgc29tZSB0ZXh0IHRvIG15IGJvb2tcIiwgXCIxNC0wNC0yMDI0XCIsIFwibm90IGltcG9ydGFudFwiLCB0cnVlKTtcbmNvbnN0IHRoaXJkVG9EbyA9IGNyZWF0ZVRvRG8oXCJCdXkgY2F0IGZvb2RcIiwgXCJCdXkgc29tZSBraXRla2F0XCIsIFwiMDQtMDUtMjAyNFwiLCBcInZlcnkgaW1vcnRhbnRcIik7XG5cblxuLy8gYWRkaW5nIHByZXZpb3VzbHkgY3JlYXRlZCB0b2RvcyB0byB0aGUgb2JqZWN0IGhvbGRpbmcgdG9kb3Mgd2l0aCB0aGUgYWRkVG9Eb09iaiBmdW5jdGlvblxuYWRkVG9Eb09iaihuZXdEbyk7XG5hZGRUb0RvT2JqKGFub3RoZXJEby8qLCBlLmcuIGhvbWUqLyk7IC8vIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgc3BlY2lmaWVzIHRoZSBwcm9qZWN0IHRvIHB1dCB0aGUgdG8tZG8gaW50b1xuYWRkVG9Eb09iaih0aGlyZFRvRG8pO1xuXG5cbihmdW5jdGlvbiBjcmVhdGVQYWdlKCkge1xuICAgIGNyZWF0ZUhlYWRlcihcIkxpa2EgaSB5YVwiKTtcbiAgICBjcmVhdGVNYWluRGl2KCk7XG4gICAgY3JlYXRlQnV0dG9uc0ZvckVhY2hQcm9qZWN0T25TaWRlYmFyKHRvRG9zT2JqKTtcbiAgICBkaXNwbGF5UHJvamVjdHModG9Eb3NPYmopO1xufSkoKTsiXSwibmFtZXMiOlsiY3JlYXRlVG9EbyIsInRpdGxlIiwiZGVzYyIsImR1ZURhdGUiLCJwcmlvcml0eSIsImNvbXBsZXRlZCIsImlkIiwiRGF0ZSIsIm5vdyIsInRvRG9zT2JqIiwiYWRkVG9Eb09iaiIsInRvRG8iLCJwcm9qZWN0IiwicHVzaCIsImFkZE5ld1Byb2plY3QiLCJwcm9qZWN0TmFtZSIsImNyZWF0ZUJ1dHRvbnNGb3JFYWNoUHJvamVjdE9uU2lkZWJhciIsInByb2plY3RzIiwicHJvamVjdHNEaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0c0tleXMiLCJPYmplY3QiLCJrZXlzIiwiaW5uZXJIVE1MIiwicHJvamVjdEhlYWRlciIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiZm9yRWFjaCIsImtleSIsImJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsImJ1dHRvbk5hbWUiLCJhZGRCdXR0b24iLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybSIsImlucHV0RmllbGQiLCJhZGRQcm9qZWN0QnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYWRkQnRuIiwiZ2V0RWxlbWVudEJ5SWQiLCJjYW5jZWxCdG4iLCJpbnB1dHRlZE5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJ0YWJsZSIsImRpc3BsYXlQcm9qZWN0cyIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImhhbmRsZU5ld1Byb2plY3RzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1haW5IZWFkZXIiLCJsb2ciLCJtYWluIiwibmV3RGl2IiwiY3JlYXRlRWxBbmRBcHBlbmQiLCJpbnB1dERpdiIsImhhbmRsZUJ1dHRvbnMiLCJhZGROZXdUb0RvQnRuIiwidWwiLCJpdGVtIiwibGkiLCJwIiwibWFpbkRpdiIsInBhcmVudEVsSWQiLCJ0eXBlIiwiYXR0cmlidXRlcyIsIm5ld0VsIiwiaGFzT3duUHJvcGVydHkiLCJuZXdEbyIsImFub3RoZXJEbyIsInRoaXJkVG9EbyIsIm5hbWUiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVNYWluRGl2Il0sInNvdXJjZVJvb3QiOiIifQ==