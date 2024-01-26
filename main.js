(()=>{"use strict";const t=(t,e,n,o="important",d=!1)=>({id:Date.now(),title:t,desc:e,dueDate:n,priority:o,completed:d}),e={Default:[],Home:[],Work:[]},n=(t,n="Default")=>(e[n].push(t),e);function o(t,e=null,n=null){const o=document.createElement("ul");function d(n){const d=document.createElement("li");d.classList.add("li-element");for(const t in n)if(["title","desc","dueDate"].includes(t)){const e=document.createElement("p");e.textContent=n[t],d.appendChild(e)}const c=document.createElement("button");c.textContent="Delete",c.addEventListener("click",(()=>{const c=t[e].indexOf(n);t[e].splice(c,1),o.removeChild(d)})),d.appendChild(c),o.appendChild(d)}if(e||n)e&&!n&&t[e]&&t[e].forEach((t=>{d(t)}));else for(const e in t)t[e].forEach((t=>{d(t)}));return console.log("test2 working!"),o}function d(t){const e=document.querySelectorAll(".projects-list-button"),n=document.querySelector("#mainDiv"),d=document.getElementById("mainHeader");e.forEach((e=>{e.addEventListener("click",(()=>{const c=o(t,e.textContent,null);n.innerHTML="",n.appendChild(c),d.textContent=e.textContent}))}))}function c(t,e,n){let o=document.createElement(e);for(let t in n)n.hasOwnProperty(t)&&o.setAttribute(t,n[t]);return document.getElementById(t).appendChild(o),o}const i=t("Milk","Buy some milk for the cat","12-02-2024","very important"),l=t("Writing","Write some text to my book","14-04-2024","not important",!0),u=t("Buy cat food","Buy some kitekat","04-05-2024","very important");n(i),n(l),n(u),c("to-dos-div","button",{type:"button",id:"all-to-dos"}).textContent="All",c("to-dos-div","button",{type:"button",id:"today-to-dos"}).textContent="Today",c("to-dos-div","button",{type:"button",id:"next-week-to-dos"}).textContent="Next week",function(t){const e=document.getElementById("all-to-dos"),n=(document.getElementById("today-to-dos"),document.getElementById("next-week-to-dos"),document.getElementById("mainDiv")),d=document.getElementById("mainHeader");document.getElementById("new-ToDo-btn"),e.addEventListener("click",(()=>{const c=o(t,null,null);n.innerHTML="",n.appendChild(c),d.textContent=e.textContent}))}(e),function t(n){const o=document.querySelector("#projects-div"),i=Object.keys(n);o.innerHTML="";const l=document.createElement("h3");return l.textContent="Projects",o.appendChild(l),i.forEach((t=>{const e=document.createElement("button");e.classList.add("projects-list-button"),e.textContent=t,o.appendChild(e)})),function(n,o){const i=document.querySelector("#projects-div"),l=document.createElement("button");l.textContent="New project +",l.setAttribute("id","add-new-project-btn"),i.appendChild(l),l.addEventListener("click",(()=>{const n=document.createElement("form");n.classList.add("input-field"),n.setAttribute("id","input-field"),i.appendChild(n),c("input-field","input",{type:"text",id:"project-input","max-length":"24",placeholder:"Enter project name",autocomplete:"off"}),c("input-field","button",{type:"button",id:"add-project-btn"}).textContent="Add",c("input-field","button",{type:"button",id:"cancel-add-project-btn"}).textContent="Cancel",l.setAttribute("disabled",!0),function(n){const o=document.getElementById("add-project-btn"),c=document.querySelector("#cancel-add-project-btn");o.addEventListener("click",(()=>{const o=document.getElementById("project-input").value;e[o]=[],console.table(e),t(n),d(n)})),c.addEventListener("click",(()=>{const t=document.querySelector(".input-field"),e=document.querySelector("#add-new-project-btn");t&&t.remove(),e.removeAttribute("disabled")}))}(o)}))}(0,n),o}(e),d(e)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBR08sTUFBTSxFQUFhLENBQUNBLEVBQU9DLEVBQU1DLEVBQVNDLEVBQVcsWUFBYUMsR0FBWSxLQUMxRSxDQUNIQyxHQUFLQyxLQUFLQyxNQUNWUCxRQUNBQyxPQUNBQyxVQUNBQyxXQUNBQyxjQU9LSSxFQUFXLENBQ3BCLFFBQVcsR0FDWCxLQUFRLEdBQ1IsS0FBUSxJQUtDLEVBQWEsQ0FBQ0MsRUFBTUMsRUFBVSxhQUN2Q0YsRUFBU0UsR0FBU0MsS0FBS0YsR0FDaEJELEdDM0JKLFNBQVNJLEVBQU1DLEVBQUtILEVBQVUsS0FBTUksRUFBTyxNQUU5QyxNQUFNQyxFQUFLQyxTQUFTQyxjQUFjLE1BRWxDLFNBQVNDLEVBQVNULEdBRWQsTUFBTVUsRUFBS0gsU0FBU0MsY0FBYyxNQUNsQ0UsRUFBR0MsVUFBVUMsSUFBSSxjQUVqQixJQUFLLE1BQU1DLEtBQU9iLEVBRWQsR0FBSSxDQUFDLFFBQVMsT0FBUSxXQUFXYyxTQUFTRCxHQUFNLENBRTVDLE1BQU1FLEVBQUlSLFNBQVNDLGNBQWMsS0FFakNPLEVBQUVDLFlBQWNoQixFQUFLYSxHQUVyQkgsRUFBR08sWUFBWUYsRUFDbkIsQ0FFSixNQUFNRyxFQUFlWCxTQUFTQyxjQUFjLFVBQzVDVSxFQUFhRixZQUFjLFNBQzNCRSxFQUFhQyxpQkFBaUIsU0FBUyxLQUVuQyxNQUFNQyxFQUFRaEIsRUFBSUgsR0FBU29CLFFBQVFyQixHQUNuQ0ksRUFBSUgsR0FBU3FCLE9BQU9GLEVBQU8sR0FFM0JkLEVBQUdpQixZQUFZYixFQUFHLElBRXRCQSxFQUFHTyxZQUFZQyxHQUlmWixFQUFHVyxZQUFZUCxFQUNuQixDQUtBLEdBQUtULEdBQVlJLEVBV05KLElBQVlJLEdBRWZELEVBQUlILElBRUpHLEVBQUlILEdBQVN1QixTQUFReEIsSUFFakJTLEVBQVNULEVBQUssU0FmdEIsSUFBSyxNQUFNeUIsS0FBZ0JyQixFQUV2QkEsRUFBSXFCLEdBQWNELFNBQVF4QixJQUV0QlMsRUFBU1QsRUFBSyxJQWlCMUIsT0FEQTBCLFFBQVFDLElBQUksa0JBQ0xyQixDQUNYLENDbENPLFNBQVNzQixFQUFnQkMsR0FDNUIsTUFBTUMsRUFBVXZCLFNBQVN3QixpQkFBaUIseUJBQ3BDQyxFQUFVekIsU0FBUzBCLGNBQWMsWUFDakNDLEVBQUszQixTQUFTNEIsZUFBZSxjQUVuQ0wsRUFBUU4sU0FBUVksSUFDWkEsRUFBT2pCLGlCQUFpQixTQUFTLEtBQzdCLE1BQU1iLEVBQUtILEVBQU0wQixFQUFVTyxFQUFPcEIsWUFBYSxNQUMvQ2dCLEVBQVFLLFVBQVksR0FDcEJMLEVBQVFmLFlBQVlYLEdBQ3BCNEIsRUFBR2xCLFlBQWNvQixFQUFPcEIsV0FBVyxHQUV0QyxHQUVULENBMFBBLFNBQVNzQixFQUFrQkMsRUFBWUMsRUFBTUMsR0FDekMsSUFBSUMsRUFBUW5DLFNBQVNDLGNBQWNnQyxHQUVuQyxJQUFLLElBQUkzQixLQUFPNEIsRUFDUkEsRUFBV0UsZUFBZTlCLElBQzFCNkIsRUFBTUUsYUFBYS9CLEVBQUs0QixFQUFXNUIsSUFRM0MsT0FKZU4sU0FBUzRCLGVBQWVJLEdBRTlCdEIsWUFBWXlCLEdBRWRBLENBQ1gsQ0M5U0EsTUFBTUcsRUFBUSxFQUFXLE9BQVEsNEJBQTZCLGFBQWMsa0JBQ3RFQyxFQUFZLEVBQVcsVUFBVyw2QkFBOEIsYUFBYyxpQkFBaUIsR0FDL0ZDLEVBQVksRUFBVyxlQUFnQixtQkFBb0IsYUFBYyxrQkFJL0UsRUFBV0YsR0FDWCxFQUFXQyxHQUNYLEVBQVdDLEdEMlNLVCxFQUFrQixhQUFjLFNBQVUsQ0FDbEQsS0FBUSxTQUNSLEdBQU0sZUFFTnRCLFlBQWMsTUFFSnNCLEVBQWtCLGFBQWMsU0FBVSxDQUNwRCxLQUFRLFNBQ1IsR0FBTSxpQkFFSnRCLFlBQWMsUUFFSHNCLEVBQWtCLGFBQWMsU0FBVSxDQUN2RCxLQUFRLFNBQ1IsR0FBTSxxQkFFRHRCLFlBQWMsWUFHcEIsU0FBcUJhLEdBQ3hCLE1BQU1tQixFQUFTekMsU0FBUzRCLGVBQWUsY0FHakNILEdBRld6QixTQUFTNEIsZUFBZSxnQkFDckI1QixTQUFTNEIsZUFBZSxvQkFDNUI1QixTQUFTNEIsZUFBZSxZQUNsQ0QsRUFBSzNCLFNBQVM0QixlQUFlLGNBQ1o1QixTQUFTNEIsZUFBZSxnQkFDL0NhLEVBQU83QixpQkFBaUIsU0FBUyxLQUM3QixNQUFNYixFQUFLSCxFQUFNMEIsRUFBVSxLQUFNLE1BQ2pDRyxFQUFRSyxVQUFZLEdBQ3BCTCxFQUFRZixZQUFZWCxHQUNwQjRCLEVBQUdsQixZQUFjZ0MsRUFBT2hDLFdBQVcsR0FHM0MsQ0N2VUlpQyxDQUFZbEQsR0RiVCxTQUFTbUQsRUFBcUNyQixHQUNqRCxNQUFNc0IsRUFBYzVDLFNBQVMwQixjQUFjLGlCQUNyQ21CLEVBQWVDLE9BQU9DLEtBQUt6QixHQUdqQ3NCLEVBQVlkLFVBQVksR0FDeEIsTUFBTWtCLEVBQWdCaEQsU0FBU0MsY0FBYyxNQWM3QyxPQWJBK0MsRUFBY3ZDLFlBQWMsV0FFNUJtQyxFQUFZbEMsWUFBWXNDLEdBR3hCSCxFQUFhNUIsU0FBUVgsSUFDakIsTUFBTXVCLEVBQVM3QixTQUFTQyxjQUFjLFVBQ3RDNEIsRUFBT3pCLFVBQVVDLElBQUksd0JBQ3JCd0IsRUFBT3BCLFlBQWNILEVBQ3JCc0MsRUFBWWxDLFlBQVltQixFQUFPLElBOEV2QyxTQUEwQm9CLEVBQVkzQixHQUNsQyxNQUFNc0IsRUFBYzVDLFNBQVMwQixjQUFjLGlCQUNyQ3dCLEVBQVlsRCxTQUFTQyxjQUFjLFVBQ3pDaUQsRUFBVXpDLFlBOUVPLGdCQStFakJ5QyxFQUFVYixhQUFhLEtBQU0sdUJBRTdCTyxFQUFZbEMsWUFBWXdDLEdBRXhCQSxFQUFVdEMsaUJBQWlCLFNBQVMsS0FDaEMsTUFBTXVDLEVBQU9uRCxTQUFTQyxjQUFjLFFBQ3BDa0QsRUFBSy9DLFVBQVVDLElBQUksZUFDbkI4QyxFQUFLZCxhQUFhLEtBQU0sZUFDeEJPLEVBQVlsQyxZQUFZeUMsR0FFTHBCLEVBQWtCLGNBQWUsUUFBUyxDQUN6RCxLQUFRLE9BQ1IsR0FBTSxnQkFDTixhQUFjLEtBQ2QsWUFBZSxxQkFDZixhQUFnQixRQUlLQSxFQUFrQixjQUFlLFNBQVUsQ0FDaEUsS0FBUSxTQUNSLEdBQU0sb0JBR090QixZQUFjLE1BRVZzQixFQUFrQixjQUFlLFNBQVUsQ0FDNUQsS0FBUSxTQUNSLEdBQU0sMkJBRUd0QixZQUFjLFNBSTNCeUMsRUFBVWIsYUFBYSxZQUFZLEdBTTNDLFNBQTJCZixHQUN2QixNQUFNOEIsRUFBU3BELFNBQVM0QixlQUFlLG1CQUNqQ3lCLEVBQVlyRCxTQUFTMEIsY0FBYywyQkFFekMwQixFQUFPeEMsaUJBQWlCLFNBQVMsS0FDN0IsTUFBTTBDLEVBQWV0RCxTQUFTNEIsZUFBZSxpQkFBaUIyQixNRjVHbEUvRCxFRTZHa0I4RCxHRjdHTSxHRThHcEJuQyxRQUFRcUMsTUFBTWhFLEdBQ2RtRCxFQUFxQ3JCLEdBQ3JDRCxFQUFnQkMsRUFBUyxJQUk3QitCLEVBQVV6QyxpQkFBaUIsU0FBUyxLQUNoQyxNQUFNdUMsRUFBT25ELFNBQVMwQixjQUFjLGdCQUM5QkcsRUFBUzdCLFNBQVMwQixjQUFjLHdCQUNsQ3lCLEdBQU1BLEVBQUtNLFNBQ2Y1QixFQUFPNkIsZ0JBQWdCLFdBQVcsR0FHMUMsQ0F6QlFDLENBQWtCckMsRUFBUyxHQUduQyxDQXJISXNDLENBQWlCLEVBQWlCdEMsR0FDM0JzQixDQUNYLENDUElELENBQXFDbkQsR0FDckM2QixFQUFnQjdCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rlc3QyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL1VJLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vL0ZhY3RvcnkgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRvLWRvIG9iamVjdHNcbmV4cG9ydCBjb25zdCBjcmVhdGVUb0RvID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlLCBwcmlvcml0eSA9IFwiaW1wb3J0YW50XCIsIGNvbXBsZXRlZCA9IGZhbHNlKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQgOiBEYXRlLm5vdygpLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgZGVzYyxcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHksIFxuICAgICAgICBjb21wbGV0ZWRcbiAgICB9XG59O1xuXG5cbi8vIE9iaiB0aGF0IHN0b3JlcyB0by1kb3MgYXJyYXlzIGFuZCBwcm9qZWN0IG5hbWVzXG5cbmV4cG9ydCBjb25zdCB0b0Rvc09iaiA9IHtcbiAgICBcIkRlZmF1bHRcIjogW10sXG4gICAgXCJIb21lXCI6IFtdLFxuICAgIFwiV29ya1wiOiBbXSxcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCB0by1kb3MgdG8gdG9Eb3Mgb2JqZWN0XG5cbmV4cG9ydCBjb25zdCBhZGRUb0RvT2JqID0gKHRvRG8sIHByb2plY3QgPSBcIkRlZmF1bHRcIikgPT4ge1xuICAgIHRvRG9zT2JqW3Byb2plY3RdLnB1c2godG9Ebyk7XG4gICAgcmV0dXJuIHRvRG9zT2JqO1xufTtcblxuLy8gRnVuY3Rpb24gdG8gZGVsZXRlIGEgdG8tZG9cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVRvRG8gPSAoaW5kZXgsIHByb2plY3QpID0+IHtcbiAgICB0b0Rvc09ialtwcm9qZWN0XS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgcmV0dXJuIHRvRG9zT2JqO1xufVxuXG4vLyBGdW5jdGlvbiB0byBhZGQgbmV3IHByb2plY3RzXG5cbmV4cG9ydCBjb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgdG9Eb3NPYmpbcHJvamVjdE5hbWVdID0gW107XG4gICAgcmV0dXJuIHRvRG9zT2JqO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRlc3QyKG9iaiwgcHJvamVjdCA9IG51bGwsIGRhdGUgPSBudWxsKSB7XG4gICAgLy8gY3JlYXRpbmcgdGhlIHVsIHRvIGhvbGQgYWxsIHRoZSBsaSdzIGFuZCByZXR1cm4gYXQgdGhlIGVuZCBvZiB0aGUgZnVuY3Rpb25cbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAvLyBoZWxwZXIgZnVuY3Rpb24gdGhhdCB3aWxsIGNyZWF0ZSBsaSdzIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpKHRvRG8pIHtcbiAgICAgICAgLy8gY3JlYXRpbmcgdGhlIGxpXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwibGktZWxlbWVudFwiKTtcbiAgICAgICAgLy8gbG9vcGluZyB0aHJvdWdoIHRoZSB0b0RvIG9iaiB0aGF0IGlzIHBhc3NlZCBhcyB0aGUgYXJndW1lbnQgXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRvRG8pIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBrZXkgaXMgdGl0bGUsIGRlc2MsIG9yIGR1ZURhdGVcbiAgICAgICAgICAgIGlmIChbXCJ0aXRsZVwiLCBcImRlc2NcIiwgXCJkdWVEYXRlXCJdLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYSBwIGVsZW1lbnQgdG8gaG9sZGUgdGhlIGluZm9cbiAgICAgICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICAgICAgLy8gcHV0dGluZyB0aGUgaW5mbyBmcm9tIHRoZSBhYm92ZSBpbnRvIHRoZSBwXG4gICAgICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IHRvRG9ba2V5XTtcbiAgICAgICAgICAgICAgICAvL2FwcGVuZGluZyB0aGUgcCBhcyB0aGUgbGkncyBjaGlsZFxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSB0b2RvIGZyb20gdGhlIGFycmF5XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG9ialtwcm9qZWN0XS5pbmRleE9mKHRvRG8pO1xuICAgICAgICAgICAgb2JqW3Byb2plY3RdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIFVJXG4gICAgICAgICAgICB1bC5yZW1vdmVDaGlsZChsaSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIFxuICAgICAgICAvLyBhcHBlbmRpbmQgdGhlIGxpJ3MgdG8gdGhlIHVsXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLy8gY2hlY2tpbmcgdGhlIGNvbmRpdGlvbnMgYW5kIGFkZGluZyB0aGUgdG9Eb3MgYWNjb3JkaW5nbHlcbiAgICAvLyBpZiBubyBwcm9qZWN0IG9yIGRhdGUgc3BlY2lmaWVkXG4gICAgaWYgKCFwcm9qZWN0ICYmICFkYXRlKSB7XG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCBhbGwgdGhlIHByb2plY3QgbmFtZXMgaW4gdGhlIG9iamVjdFxuICAgICAgICBmb3IgKGNvbnN0IHByb2plY3ROYW1lcyBpbiBvYmopIHtcbiAgICAgICAgICAgIC8vIGVudGVyIGVhY2ggcHJvamVjdCBhbmQgbG9vcCBhbGwgdGhlIHRvZG8gb2JqZWN0cyBpbiBpdFxuICAgICAgICAgICAgb2JqW3Byb2plY3ROYW1lc10uZm9yRWFjaCh0b0RvID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYWxsIHRoZSBhYm92ZSBjcmVhdGVkIGZ1bmN0aW9uIHdpdGggdGhlIHRvRG8gcGFzc2VkIGFzIHRoZSBhcmd1bWVudFxuICAgICAgICAgICAgICAgIGNyZWF0ZUxpKHRvRG8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAvLyBpZiBvbmx5IHRoZSBwcm9qZWN0IGlzIHNwZWNpZmllZCBhbmQgbm8gZGF0ZVxuICAgIH0gZWxzZSBpZiAocHJvamVjdCAmJiAhZGF0ZSkge1xuICAgICAgICAvL2NoZWNrIGlmIHRoZSBwcm9qZWN0IHBhc3NlZCBhcyB0aGUgYXJndW1lbnQgaXMgaW4gdGhlIGxpc3QgXG4gICAgICAgIGlmIChvYmpbcHJvamVjdF0pIHtcbiAgICAgICAgICAgIC8vIGlmIGl0IGlzIGxvb3AgdGhyb3VnaCBhbGwgdGhlIHRvRG8gb2JqZWN0cyBpbiB0aGUgcHJvamVjdFxuICAgICAgICAgICAgb2JqW3Byb2plY3RdLmZvckVhY2godG9EbyA9PiB7XG4gICAgICAgICAgICAgICAgLy8gYW5kIGNyZWF0ZSBsaSdzIHdpdGggdGhvc2UgdG9kb3NcbiAgICAgICAgICAgICAgICBjcmVhdGVMaSh0b0RvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJ0ZXN0MiB3b3JraW5nIVwiKTtcbiAgICByZXR1cm4gdWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlbEJ0bihsaSkge1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdHNbYnV0dG9uLnRleHRDb250ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH0pXG4gICAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbn1cblxuIiwiaW1wb3J0IHsgdG9Eb3NPYmosIGFkZE5ld1Byb2plY3QsIGFkZFRvRG9PYmosIGNyZWF0ZVRvRG8sIGRlbGV0ZVRvRG8gfSBmcm9tIFwiLi9jcmVhdGVUb0RvXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IHRlc3QyIH0gZnJvbSBcIi4vdGVzdDJcIjtcblxuLy8gRnVuY3Rpb24gdG8gcmVuZGVyIHRoZSBwcm9qZWN0cyB0byB0aGUgRE9NIGFzIGJ1dHRvbnMgKGludG8gdGhlIHByb2plY3RzLWRpdiksIGV4cG9ydGVkIHRvIHVzZSBpbiBpbmRleC5qc1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnNGb3JFYWNoUHJvamVjdE9uU2lkZWJhcihwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1kaXZcIik7XG4gICAgY29uc3QgcHJvamVjdHNLZXlzID0gT2JqZWN0LmtleXMocHJvamVjdHMpO1xuXG4gICAgLy9DbGVhciBvdXQgdGhlIHByb2plY3RzIGRpdiBmaXJzdCBBTFdBWVMgQ0xFQVIgT1VUIEJFRk9SRSBBRERJTkcgTkVXXG4gICAgcHJvamVjdHNEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5cbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0SGVhZGVyKTtcblxuICAgIC8vQ3JlYXRpbmcgYnV0dG9ucyBmcm9tIHRvRG9zT2JqIGtleXNcbiAgICBwcm9qZWN0c0tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWxpc3QtYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBrZXk7XG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uKFwiTmV3IHByb2plY3QgK1wiLCBwcm9qZWN0cylcbiAgICByZXR1cm4gcHJvamVjdHNEaXY7XG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UHJvamVjdHMocHJvamVjdHMpIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0cy1saXN0LWJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluRGl2XCIpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSGVhZGVyXCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdWwgPSB0ZXN0Mihwcm9qZWN0cywgYnV0dG9uLnRleHRDb250ZW50LCBudWxsKTtcbiAgICAgICAgICAgIG1haW5EaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgICAgICAgaDEudGV4dENvbnRlbnQgPSBidXR0b24udGV4dENvbnRlbnQ7XG5cbiAgICAgICAgfSlcbiAgICB9KVxufVxuLy8gZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cykge1xuLy8gICAgIC8vIENob29zaW5nIGFsbCB0aGUgYnV0dG9ucyB3aXRoIHByb2plY3QgbmFtZXMgXG4vLyAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdHMtbGlzdC1idXR0b25cIik7XG4vLyAgICAgLy8gSXRlcmF0aW5nIHRocm91Z2ggdGhvc2UgYnV0dG9uc1xuLy8gICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuLy8gICAgICAgICAvLyBhZGRpbmcgY2xpY2sgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZW1cbi8vICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICAvLyB1cGRhdGluZyB0aGUgaGVhZGVyXG4vLyAgICAgICAgICAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gYnV0dG9uLnRleHRDb250ZW50O1xuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAvLyBjcmVhdGluZyB0aGUgYnV0dG9uIHRoYXQgc2hvd3MgdXAgYW4gaW5wdXQgZm9ybVxuLy8gICAgICAgICAgICAgYWRkTmV3VG9Eb0J0bigpO1xuLy8gICAgICAgICAgICAgLy8gY3JlYXRpbmcgYSB1bCBlbGVtZW50IHRvIGhvbGQgYWxsIHRoZSB0b0RvcyBpbnNpZGVcbi8vICAgICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuLy8gICAgICAgICAgICAgLy8gaXRlcmF0aW5nIHRocm91Z2ggZWFjaCBwcm9qZWN0J3MgYXJyYXkgdGhhdCBob2xkIHRvRG8gb2JqZWN0c1xuLy8gICAgICAgICAgICAgcHJvamVjdHNbYnV0dG9uLnRleHRDb250ZW50XS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuLy8gICAgICAgICAgICAgICAgIC8vY3JlYXRpbmcgYSBsaSBlbGVtZW50IHRvIGhvbGQgZWFjaCB0b0RvIG9iamVjdHNcbi8vICAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbi8vICAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwibGktZWxlbWVudFwiKTtcbi8vICAgICAgICAgICAgICAgICAvLyBpdGVyYXRpbmcgdGhyb3VnaCBlYWNoIHRvRG8gb2JqIGtleVxuLy8gICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goa2V5ID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGtleSBlcXVhbHMgZGVzY3JpcHRpb25cbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJ0aXRsZVwiIHx8IGtleSA9PT0gXCJkZXNjXCIgfHwga2V5ID09PSBcImR1ZURhdGVcIikge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgcCBlbGVtZW50IHRvIGhvbGQgdGhlIHRleHRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHB1dHRpbmcgdGhlIHZhbHVlIG9mIHRoZSBrZXkgaW5zaWRlIHRoZSBwIGVsZW1lbnRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHAudGV4dENvbnRlbnQgPSBpdGVtW2tleV07XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmRpbmcgdGhlIHAgZWxlbWVudCB3aXRoIGluZm8gdG8gdGhlIGxpIGVsZW1lbnRcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfSlcbi8vICAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuLy8gICAgICAgICAgICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiZGVsZXRlXCI7XG4vLyAgICAgICAgICAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2J1dHRvbi50ZXh0Q29udGVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgICAgICBcblxuLy8gICAgICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbi8vICAgICAgICAgICAgICAgICAvLyBhcHBlbmRpbmcgdGhlIGxpIGVsZW1lbnQgdG8gdGhlIHBhcmVudCB1bCBlbGVtZW50IGNyZWF0ZWQgb24gbGluZSA3OFxuLy8gICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbi8vICAgICAgICAgICAgIH0pXG4vLyAgICAgICAgICAgICAvLyBjbGVhcmluZyBvdXQgdGhlIG1haW4gZGl2IGJlZm9yZSByZW5kZXJpbmcgdGhlIGNvbnRlbnQgaW5zaWRlXG4vLyAgICAgICAgICAgICBtYWluRGl2LmlubmVySFRNTCA9IFwiXCI7XG4vLyAgICAgICAgICAgICAvL2FwcGVuZGluZyB0aGUgdWwgaW5zaWRlIHRoZSBtYWluRGl2XG4vLyAgICAgICAgICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHVsKTtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICB9KVxuLy8gICAgIH0pXG4vLyB9O1xuXG5cblxuZnVuY3Rpb24gYWRkUHJvamVjdEJ1dHRvbihidXR0b25OYW1lLCBwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1kaXZcIik7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBidXR0b25OYW1lO1xuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1uZXctcHJvamVjdC1idG5cIilcbiAgICBcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIFxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImlucHV0LWZpZWxkXCIpOyAgXG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbnB1dC1maWVsZFwiKTtcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgY29uc3QgaW5wdXRGaWVsZCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZmllbGRcIiwgXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBcImlkXCI6IFwicHJvamVjdC1pbnB1dFwiLFxuICAgICAgICAgICAgXCJtYXgtbGVuZ3RoXCI6IFwiMjRcIixcbiAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJFbnRlciBwcm9qZWN0IG5hbWVcIixcbiAgICAgICAgICAgIFwiYXV0b2NvbXBsZXRlXCI6IFwib2ZmXCJcbiAgICAgICAgfSk7XG4gICAgXG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZmllbGRcIiwgXCJidXR0b25cIiwge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcImlkXCI6IFwiYWRkLXByb2plY3QtYnRuXCIsXG5cbiAgICAgICAgfSk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZmllbGRcIiwgXCJidXR0b25cIiwge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICBcImlkXCI6IFwiY2FuY2VsLWFkZC1wcm9qZWN0LWJ0blwiXG4gICAgICAgIH0pO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICBoYW5kbGVOZXdQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgfSlcbiAgICBcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZU5ld1Byb2plY3RzKHByb2plY3RzKSB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtYWRkLXByb2plY3QtYnRuXCIpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0dGVkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgYWRkTmV3UHJvamVjdChpbnB1dHRlZE5hbWUpO1xuICAgICAgICBjb25zb2xlLnRhYmxlKHRvRG9zT2JqKTtcbiAgICAgICAgY3JlYXRlQnV0dG9uc0ZvckVhY2hQcm9qZWN0T25TaWRlYmFyKHByb2plY3RzKTtcbiAgICAgICAgZGlzcGxheVByb2plY3RzKHByb2plY3RzKTtcbiAgICBcbiAgICB9KTtcbiAgICBcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZmllbGRcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLW5ldy1wcm9qZWN0LWJ0blwiKTtcbiAgICAgICAgaWYgKGZvcm0pIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcblxuICAgIH0pXG59O1xuXG5mdW5jdGlvbiBhZGROZXdUb0RvQnRuKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbGV0IGV4aXN0aW5nQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctVG9Eby1idG5cIik7XG5cbiAgICBpZiAoIWV4aXN0aW5nQnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1Ub0RvLWJ0blwiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJhZGRcIjtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmV3RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW5wdXQtRGl2XCIpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG5ld0Rpdik7XG5cbiAgICAgICAgY3JlYXRlRWxBbmRBcHBlbmQoXCJpbnB1dC1EaXZcIiwgXCJmb3JtXCIsIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCJpbnB1dC1mb3JtXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBjcmVhdGVFbEFuZEFwcGVuZChcImlucHV0LWZvcm1cIiwgXCJsYWJlbFwiLCB7XG4gICAgICAgICAgICBcImZvclwiOiBcInRpdGxlLWlucHV0XCIsXG5cbiAgICAgICAgfSk7XG4gICAgICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG5cbiAgICAgICAgXG4gICAgICAgIGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcImlucHV0XCIsIHsgIC8vVGl0bGUgaW5wdXRcbiAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgIFwiaWRcIjogXCJ0aXRsZS1pbnB1dFwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgXG4gICAgICAgIGNvbnN0IGRlc2NMYWJlbCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcImxhYmVsXCIsIHtcbiAgICAgICAgICAgIFwiZm9yXCI6IFwiZGVzYy1pbnB1dFwiXG4gICAgICAgIH0pO1xuICAgICAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbiAgICAgICAgXG4gICAgICAgIGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCJkZXNjLWlucHV0XCIsXG4gICAgICAgICAgICBcInJvd3NcIjogXCI1XCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRhdGVMYWJlbCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcImxhYmVsXCIsIHtcbiAgICAgICAgICAgIFwiZm9yXCI6IFwiZHVlRGF0ZVwiXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlXCI7XG5cbiAgICAgICAgY3JlYXRlRWxBbmRBcHBlbmQoXCJpbnB1dC1mb3JtXCIsIFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgXCJpZFwiOiBcImR1ZURhdGVcIixcbiAgICAgICAgICAgIC8vcmVxdWlyZWRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcImxhYmVsXCIsIHtcbiAgICAgICAgICAgIFwiZm9yXCI6IFwicHJpb3JpdHlcIlxuICAgICAgICB9KTtcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcblxuICAgICAgICBjcmVhdGVFbEFuZEFwcGVuZChcImlucHV0LWZvcm1cIiwgXCJzZWxlY3RcIiwge1xuICAgICAgICAgICAgXCJpZFwiOiBcInByaW9yaXR5XCJcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB2ZXJ5ID0gY3JlYXRlRWxBbmRBcHBlbmQoXCJwcmlvcml0eVwiLCBcIm9wdGlvblwiLCB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwidmVyeVwiLFxuXG4gICAgICAgIH0pO1xuICAgICAgICB2ZXJ5LnRleHRDb250ZW50ID0gXCJWZXJ5IEltcG9ydGFudFwiO1xuXG4gICAgICAgIGNvbnN0IGltcG9ydGFudCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwicHJpb3JpdHlcIiwgXCJvcHRpb25cIiwge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcImltcG9ydGFudFwiLFxuXG4gICAgICAgIH0pO1xuICAgICAgICBpbXBvcnRhbnQudGV4dENvbnRlbnQgPSBcIkltcG9ydGFudFwiO1xuXG4gICAgICAgIGNvbnN0IG5vdCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwicHJpb3JpdHlcIiwgXCJvcHRpb25cIiwge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIm5vdFwiLFxuXG4gICAgICAgIH0pO1xuICAgICAgICBub3QudGV4dENvbnRlbnQgPSBcIk5vdCBJbXBvcnRhbnRcIjtcblxuICAgICAgICAvLyBjcmVhdGluZyB0d28gYnV0dG9ucyBcblxuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBjcmVhdGVFbEFuZEFwcGVuZChcImlucHV0LWZvcm1cIiwgXCJidXR0b25cIiwge1xuICAgICAgICAgICAgXCJpZFwiOiBcImFkZFRvRG9CdG5cIixcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgICAgIH0pO1xuICAgICAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUby1kb1wiO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwiaW5wdXQtZm9ybVwiLCBcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICBcImlkXCI6IFwiY2FuY2VsQnRuXCIsXG4gICAgICAgICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgICAgICB9KTtcbiAgICAgICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgXG4gICAgICAgIGhhbmRsZUJ1dHRvbnMoKTtcblxuICAgIH0pO1xuICAgIH1cblxuICAgIFxufTtcblxuZnVuY3Rpb24gaGFuZGxlQnV0dG9ucygpIHtcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRvRG9CdG5cIik7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxCdG5cIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGUtaW5wdXRcIik7XG4gICAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzYy1pbnB1dFwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluSGVhZGVyXCIpO1xuICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC1EaXZcIik7XG5cbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWRkVG9Eb09iaihjcmVhdGVUb0RvKHRpdGxlLnZhbHVlLCBkZXNjLnZhbHVlLCBkdWVEYXRlLnZhbHVlID0gZm9ybWF0KERhdGUubm93KCksIFwiTU0tZGQteXl5eVwiKSwgcHJpb3JpdHkudmFsdWUpLCBwcm9qZWN0LnRleHRDb250ZW50KTtcbiAgICAgICAgaW5wdXREaXYucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaW5wdXREaXYucmVtb3ZlKCk7XG4gICAgfSlcbn07XG5cblxuXG4vL2hlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgZWxlbWVudHMgYW5kIGFwcGVuZCB0aGVtIHRvIHRoZSBwYXJlbnQgZWxlbWVudFxuZnVuY3Rpb24gY3JlYXRlRWxBbmRBcHBlbmQocGFyZW50RWxJZCwgdHlwZSwgYXR0cmlidXRlcykgeyBcbiAgICBsZXQgbmV3RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIFxuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG5ld0VsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgbGV0IHBhcmVudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGFyZW50RWxJZCk7XG5cbiAgICBwYXJlbnRFbC5hcHBlbmRDaGlsZChuZXdFbCk7XG4gICAgXG4gICAgcmV0dXJuIG5ld0VsO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGVzKCkge1xuICAgIC8vY29uc3QgZGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0by1kb3MtZGl2XCIpO1xuICAgIFxuICAgIGNvbnN0IGFsbCA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwidG8tZG9zLWRpdlwiLCBcImJ1dHRvblwiLCB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcImlkXCI6IFwiYWxsLXRvLWRvc1wiXG4gICAgfSk7XG4gICAgYWxsLnRleHRDb250ZW50ID0gXCJBbGxcIjtcblxuICAgIGNvbnN0IHRvZGF5ID0gY3JlYXRlRWxBbmRBcHBlbmQoXCJ0by1kb3MtZGl2XCIsIFwiYnV0dG9uXCIsIHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCIsXG4gICAgICAgIFwiaWRcIjogXCJ0b2RheS10by1kb3NcIlxuICAgIH0pXG4gICAgdG9kYXkudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG5cbiAgICBjb25zdCBuZXh0V2VlayA9IGNyZWF0ZUVsQW5kQXBwZW5kKFwidG8tZG9zLWRpdlwiLCBcImJ1dHRvblwiLCB7XG4gICAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiLFxuICAgICAgICBcImlkXCI6IFwibmV4dC13ZWVrLXRvLWRvc1wiXG4gICAgfSlcbiAgICBuZXh0V2Vlay50ZXh0Q29udGVudCA9IFwiTmV4dCB3ZWVrXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEYXRlcyhwcm9qZWN0cykge1xuICAgIGNvbnN0IGFsbEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxsLXRvLWRvc1wiKTtcbiAgICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXktdG8tZG9zXCIpO1xuICAgIGNvbnN0IG5leHRXZWVrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0LXdlZWstdG8tZG9zXCIpO1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5EaXZcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5IZWFkZXJcIik7XG4gICAgY29uc3QgYnV0dG9uVG9SZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1Ub0RvLWJ0blwiKTtcbiAgICBhbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgdWwgPSB0ZXN0Mihwcm9qZWN0cywgbnVsbCwgbnVsbCk7XG4gICAgICAgIG1haW5EaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh1bClcbiAgICAgICAgaDEudGV4dENvbnRlbnQgPSBhbGxCdG4udGV4dENvbnRlbnQ7XG4gICAgICAgIC8vIGFsZXJ0KGJ1dHRvblRvUmVtb3ZlKTtcbiAgICB9KVxufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgY3JlYXRlVG9EbywgdG9Eb3NPYmosIGFkZFRvRG9PYmogfSBmcm9tIFwiLi9jcmVhdGVUb0RvXCI7XG5pbXBvcnQgeyBoYW5kbGVEYXRlcywgY3JlYXRlQnV0dG9uc0ZvckVhY2hQcm9qZWN0T25TaWRlYmFyLCBjcmVhdGVEYXRlcywgZGlzcGxheVByb2plY3RzIH0gZnJvbSBcIi4vVUlcIjtcbi8vIGltcG9ydCB7IGFsZXJ0RGF0ZSB9IGZyb20gXCIuL2RhdGVzXCI7XG5cbi8vIGNyZWF0aW5nIHRocmVlIG5ldyB0b2RvcyB3aXRoIGNyZWF0ZVRvRG8gZnVuY3Rpb25cbmNvbnN0IG5ld0RvID0gY3JlYXRlVG9EbyhcIk1pbGtcIiwgXCJCdXkgc29tZSBtaWxrIGZvciB0aGUgY2F0XCIsIFwiMTItMDItMjAyNFwiLCBcInZlcnkgaW1wb3J0YW50XCIpO1xuY29uc3QgYW5vdGhlckRvID0gY3JlYXRlVG9EbyhcIldyaXRpbmdcIiwgXCJXcml0ZSBzb21lIHRleHQgdG8gbXkgYm9va1wiLCBcIjE0LTA0LTIwMjRcIiwgXCJub3QgaW1wb3J0YW50XCIsIHRydWUpO1xuY29uc3QgdGhpcmRUb0RvID0gY3JlYXRlVG9EbyhcIkJ1eSBjYXQgZm9vZFwiLCBcIkJ1eSBzb21lIGtpdGVrYXRcIiwgXCIwNC0wNS0yMDI0XCIsIFwidmVyeSBpbXBvcnRhbnRcIik7XG5cblxuLy8gYWRkaW5nIHByZXZpb3VzbHkgY3JlYXRlZCB0b2RvcyB0byB0aGUgb2JqZWN0IGhvbGRpbmcgdG9kb3Mgd2l0aCB0aGUgYWRkVG9Eb09iaiBmdW5jdGlvblxuYWRkVG9Eb09iaihuZXdEbyk7XG5hZGRUb0RvT2JqKGFub3RoZXJEby8qLCBlLmcuIGhvbWUqLyk7IC8vIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgc3BlY2lmaWVzIHRoZSBwcm9qZWN0IHRvIHB1dCB0aGUgdG8tZG8gaW50b1xuYWRkVG9Eb09iaih0aGlyZFRvRG8pO1xuXG5cbihmdW5jdGlvbiBjcmVhdGVQYWdlKCkge1xuICAgIGNyZWF0ZURhdGVzKCk7XG4gICAgaGFuZGxlRGF0ZXModG9Eb3NPYmopO1xuICAgIGNyZWF0ZUJ1dHRvbnNGb3JFYWNoUHJvamVjdE9uU2lkZWJhcih0b0Rvc09iaik7XG4gICAgZGlzcGxheVByb2plY3RzKHRvRG9zT2JqKTtcbn0pKCk7Il0sIm5hbWVzIjpbInRpdGxlIiwiZGVzYyIsImR1ZURhdGUiLCJwcmlvcml0eSIsImNvbXBsZXRlZCIsImlkIiwiRGF0ZSIsIm5vdyIsInRvRG9zT2JqIiwidG9EbyIsInByb2plY3QiLCJwdXNoIiwidGVzdDIiLCJvYmoiLCJkYXRlIiwidWwiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVMaSIsImxpIiwiY2xhc3NMaXN0IiwiYWRkIiwia2V5IiwiaW5jbHVkZXMiLCJwIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImRlbGV0ZUJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJyZW1vdmVDaGlsZCIsImZvckVhY2giLCJwcm9qZWN0TmFtZXMiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheVByb2plY3RzIiwicHJvamVjdHMiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsIm1haW5EaXYiLCJxdWVyeVNlbGVjdG9yIiwiaDEiLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbiIsImlubmVySFRNTCIsImNyZWF0ZUVsQW5kQXBwZW5kIiwicGFyZW50RWxJZCIsInR5cGUiLCJhdHRyaWJ1dGVzIiwibmV3RWwiLCJoYXNPd25Qcm9wZXJ0eSIsInNldEF0dHJpYnV0ZSIsIm5ld0RvIiwiYW5vdGhlckRvIiwidGhpcmRUb0RvIiwiYWxsQnRuIiwiaGFuZGxlRGF0ZXMiLCJjcmVhdGVCdXR0b25zRm9yRWFjaFByb2plY3RPblNpZGViYXIiLCJwcm9qZWN0c0RpdiIsInByb2plY3RzS2V5cyIsIk9iamVjdCIsImtleXMiLCJwcm9qZWN0SGVhZGVyIiwiYnV0dG9uTmFtZSIsImFkZEJ1dHRvbiIsImZvcm0iLCJhZGRCdG4iLCJjYW5jZWxCdG4iLCJpbnB1dHRlZE5hbWUiLCJ2YWx1ZSIsInRhYmxlIiwicmVtb3ZlIiwicmVtb3ZlQXR0cmlidXRlIiwiaGFuZGxlTmV3UHJvamVjdHMiLCJhZGRQcm9qZWN0QnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==