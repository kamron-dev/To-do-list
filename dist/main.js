(()=>{"use strict";const t=(t,e,n,o="important",c=!1)=>({id:Date.now(),title:t,desc:e,dueDate:n,priority:o,completed:c}),e="very important",n={default:[],home:[],work:[]},o=(t,e="default")=>(n[e].push(t),n);function c(t){document.querySelectorAll(".projects-list-button").forEach((e=>{e.addEventListener("click",(()=>{mainHeader.textContent=e.textContent,console.log(t[e.textContent]);const n=document.createElement("ul");t[e.textContent].forEach((t=>{const e=document.createElement("li");e.classList.add("li-element"),Object.keys(t).forEach((n=>{if("title"===n||"desc"===n||"dueDate"===n){const o=document.createElement("p");o.innerHTML=t[n],e.appendChild(o)}})),n.appendChild(e)})),mainDiv.innerHTML="",mainDiv.appendChild(n)}))}))}const d=t("Milk","Buy some milk for the cat","Some day",e),i=t("Writing","Write some text to my book","Today","not important",!0),r=t("Buy cat food","Buy some kitekat","Today",e);o(d),o(i),o(r),function(t){const e=document.getElementById("main"),n=document.createElement("h1");n.textContent="Lika i Ya",n.setAttribute("id","mainHeader"),e.appendChild(n)}(),function(){const t=document.getElementById("main"),e=document.createElement("div");e.setAttribute("id","mainDiv"),t.appendChild(e)}(),function t(e){const o=document.querySelector("#projects-div"),d=Object.keys(e);o.innerHTML="";const i=document.createElement("h3");return i.textContent="Projects",o.appendChild(i),d.forEach((t=>{const e=document.createElement("button");e.classList.add("projects-list-button"),e.textContent=t,o.appendChild(e)})),function(e,o){const d=document.querySelector("#projects-div"),i=document.createElement("button");i.textContent="New project +",i.setAttribute("id","add-new-project-btn"),d.appendChild(i),i.addEventListener("click",(()=>{const e=document.createElement("form");e.classList.add("input-field");const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","project-input"),r.setAttribute("maxlength","24"),r.setAttribute("placeholder","Enter project name"),r.setAttribute("autocomplete","off");const a=document.createElement("button");a.setAttribute("type","button"),a.setAttribute("id","add-project-btn"),a.textContent="Add";const u=document.createElement("button");u.setAttribute("type","button"),u.setAttribute("id","cancel-add-project-btn"),u.textContent="Cancel",e.appendChild(r),e.appendChild(a),e.appendChild(u),d.appendChild(e),i.setAttribute("disabled",!0),function(e){const o=document.getElementById("add-project-btn"),d=document.querySelector("#cancel-add-project-btn");o.addEventListener("click",(()=>{const o=document.getElementById("project-input").value;n[o]=[],console.table(n),t(e),c(e)})),d.addEventListener("click",(()=>{const t=document.querySelector(".input-field"),e=document.querySelector("#add-new-project-btn");t&&t.remove(),e.removeAttribute("disabled")}))}(o)}))}(0,e),o}(n),c(n)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQ1csRUFBV1gsYUFBYSxjQUFlLHNCQUN2Q1csRUFBV1gsYUFBYSxlQUFnQixPQUV4QyxNQUFNWSxFQUFtQnhDLFNBQVNVLGNBQWMsVUFDaEQ4QixFQUFpQlosYUFBYSxPQUFRLFVBQ3RDWSxFQUFpQlosYUFBYSxLQUFNLG1CQUNwQ1ksRUFBaUJsQyxZQUFjLE1BRS9CLE1BQU1tQyxFQUFlekMsU0FBU1UsY0FBYyxVQUM1QytCLEVBQWFiLGFBQWEsT0FBUSxVQUNsQ2EsRUFBYWIsYUFBYSxLQUFNLDBCQUNoQ2EsRUFBYW5DLFlBQWMsU0FFM0JnQyxFQUFLbEIsWUFBWW1CLEdBQ2pCRCxFQUFLbEIsWUFBWW9CLEdBQ2pCRixFQUFLbEIsWUFBWXFCLEdBRWpCVCxFQUFZWixZQUFZa0IsR0FFeEJELEVBQVVULGFBQWEsWUFBWSxHQU0zQyxTQUEyQjdCLEdBQ3ZCLE1BQU0yQyxFQUFTMUMsU0FBUzJCLGVBQWUsbUJBQ2pDZ0IsRUFBWTNDLFNBQVNpQyxjQUFjLDJCQUV6Q1MsRUFBT3RDLGlCQUFpQixTQUFTLEtBQzdCLE1BQU13QyxFQUFlNUMsU0FBUzJCLGVBQWUsaUJBQWlCa0IsTURuR2xFcEQsRUNvR2tCbUQsR0RwR00sR0NxR3BCckMsUUFBUXVDLE1BQU1yRCxHQUNkc0MsRUFBcUNoQyxHQUNyQ0QsRUFBZ0JDLEVBQVMsSUFJN0I0QyxFQUFVdkMsaUJBQWlCLFNBQVMsS0FDaEMsTUFBTWtDLEVBQU90QyxTQUFTaUMsY0FBYyxnQkFDOUI5QixFQUFTSCxTQUFTaUMsY0FBYyx3QkFDbENLLEdBQU1BLEVBQUtTLFNBQ2Y1QyxFQUFPNkMsZ0JBQWdCLFdBQVcsR0FHMUMsQ0F6QlFDLENBQWtCbEQsRUFBUyxHQUduQyxDQWhHSXlDLENBQWlCLEVBQWlCekMsR0FDM0JpQyxDQUNYLENDaEJJRCxDQUFxQ3RDLEdBQ3JDSyxFQUFnQkwsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL2NyZWF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9GYWN0b3J5IGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyB0by1kbyBvYmplY3RzXG5leHBvcnQgY29uc3QgY3JlYXRlVG9EbyA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkgPSBcImltcG9ydGFudFwiLCBjb21wbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkIDogRGF0ZS5ub3coKSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2MsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LCBcbiAgICAgICAgY29tcGxldGVkXG4gICAgfVxufTtcblxuLy8gT2JqZWN0IHRoYXQgaG9sZHMgcHJpb3JpdGllc1xuZXhwb3J0IGNvbnN0IHByaW9yaXRpZXMgPSB7XG4gICAgXCJ2ZXJ5XCI6IFwidmVyeSBpbXBvcnRhbnRcIixcbiAgICBcImltcG9ydGFudFwiOiBcImltcG9ydGFudFwiLFxuICAgIFwibm90XCI6IFwibm90IGltcG9ydGFudFwiLFxufTtcblxuLy8gT2JqIHRoYXQgc3RvcmVzIHRvLWRvcyBhcnJheXMgYW5kIHByb2plY3QgbmFtZXNcblxuZXhwb3J0IGNvbnN0IHRvRG9zT2JqID0ge1xuICAgIFwiZGVmYXVsdFwiOiBbXSxcbiAgICBcImhvbWVcIjogW10sXG4gICAgXCJ3b3JrXCI6IFtdLFxufTtcblxuLy8gRnVuY3Rpb24gdG8gYWRkIHRvLWRvcyB0byB0b0RvcyBvYmplY3RcblxuZXhwb3J0IGNvbnN0IGFkZFRvRG9PYmogPSAodG9EbywgcHJvamVjdCA9IFwiZGVmYXVsdFwiKSA9PiB7XG4gICAgdG9Eb3NPYmpbcHJvamVjdF0ucHVzaCh0b0RvKTtcbiAgICByZXR1cm4gdG9Eb3NPYmo7XG59O1xuXG4vLyBGdW5jdGlvbiB0byBhZGQgbmV3IHByb2plY3RzXG5cbmV4cG9ydCBjb25zdCBhZGROZXdQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgdG9Eb3NPYmpbcHJvamVjdE5hbWVdID0gW107XG4gICAgcmV0dXJuIHRvRG9zT2JqO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgdG9Eb3NPYmogfSBmcm9tIFwiLi9jcmVhdGVUb0RvXCI7XG5pbXBvcnQgeyBhZGROZXdQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuXG4vL0Z1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZGl2IGluc2lkZSB0aGUgbWFpbiBwYXJ0IG9mIHRoZSBzY3JlZW5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWluRGl2KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5EaXZcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgICBcbiAgICByZXR1cm4geyBtYWluLCBtYWluRGl2IH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgcHJvamVjdHMgdG8gdGhlIERPTSBhcyBidXR0b25zIChpbnRvIHRoZSBwcm9qZWN0cy1kaXYpLCBleHBvcnRlZCB0byB1c2UgaW4gaW5kZXguanNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b25zRm9yRWFjaFByb2plY3RPblNpZGViYXIocHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RzS2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3RzKTtcblxuICAgIC8vQ2xlYXIgb3V0IHRoZSBwcm9qZWN0cyBkaXYgZmlyc3QgQUxXQVlTIENMRUFSIE9VVCBCRUZPUkUgQURESU5HIE5FV1xuICAgIHByb2plY3RzRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgICAvL0NyZWF0aW5nIGJ1dHRvbnMgZnJvbSB0b0Rvc09iaiBrZXlzXG4gICAgcHJvamVjdHNLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1saXN0LWJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0ga2V5O1xuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH0pO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbihcIk5ldyBwcm9qZWN0ICtcIiwgcHJvamVjdHMpXG4gICAgcmV0dXJuIHByb2plY3RzRGl2O1xufTtcblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBtYWluRGl2IGhlYWRlciB0aGF0IHNob3VsZCBiZSB1cGRhdGVkXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKG5hbWUpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgbWFpbkhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5IZWFkZXJcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcblxuICAgIHJldHVybiB7IG1haW4sIG1haW5IZWFkZXIgfTtcblxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIC8vIENob29zaW5nIGFsbCB0aGUgYnV0dG9ucyB3aXRoIHByb2plY3RuYW1lcyBcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0cy1saXN0LWJ1dHRvblwiKTtcbiAgICAvLyBJdGVyYXRpbmcgdGhyb3VnaCB0aG9zZSBidXR0b25zXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIC8vIGFkZGluZyBjbGljayBldmVudCBsaXN0ZW5lcnMgdG8gdGhlbVxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHVwZGF0aW5nIHRoZSBoZWFkZXJcbiAgICAgICAgICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBidXR0b24udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tidXR0b24udGV4dENvbnRlbnRdKTtcbiAgICAgICAgICAgIC8vIGNyZWF0aW5nIGEgdWwgZWxlbWVudCB0byBob2xkIGFsbCB0aGUgdG9Eb3MgaW5zaWRlXG4gICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIC8vIGl0ZXJhdGluZyB0aHJvdWdoIGVhY2ggcHJvamVjdHMgYXJyYXkgdGhhdCBob2xkIHRvRG8gb2JqZWN0c1xuICAgICAgICAgICAgcHJvamVjdHNbYnV0dG9uLnRleHRDb250ZW50XS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIC8vY3JlYXRpbmcgYSBsaSBlbGVtZW50IHRvIGhvbGQgZWFjaCB0b0RvIG9iamVjdHNcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwibGktZWxlbWVudFwiKTtcbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRpbmcgdGhyb3VnaCBlYWNoIHRvRG8gb2JqIGtleVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGtleSBlcXVhbHMgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJ0aXRsZVwiIHx8IGtleSA9PT0gXCJkZXNjXCIgfHwga2V5ID09PSBcImR1ZURhdGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgcCBlbGVtZW50IHRvIGhvbGQgdGhlIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHB1dHRpbmcgdGhlIHZhbHVlIG9mIHRoZSBrZXkgaW5zaWRlIHRoZSBwIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaXRlbVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kaW5nIHRoZSBwIGVsZW1lbnQgd2l0aCBpbmZvIHRvIHRoZSBsaSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kaW5nIHRoZSBsaSBlbGVtZW50IHRvIHRoZSBwYXJlbnQgdWwgZWxlbWVudCBjcmVhdGVkIG9uIGxpbmUgNzhcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gY2xlYXJpbmcgb3V0IHRoZSBtYWluIGRpdiBiZWZvcmUgcmVuZGVyaW5nIHRoZSBjb250ZW50IGluc2lkZVxuICAgICAgICAgICAgbWFpbkRpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgLy9hcHBlbmRpbmcgdGhlIHVsIGluc2lkZSB0aGUgbWFpbkRpdlxuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdEJ1dHRvbihidXR0b25OYW1lLCBwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1kaXZcIik7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBidXR0b25OYW1lO1xuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1uZXctcHJvamVjdC1idG5cIilcbiAgICBcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIFxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImlucHV0LWZpZWxkXCIpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWlucHV0XCIpO1xuICAgICAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjI0XCIpO1xuICAgICAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgcHJvamVjdCBuYW1lXCIpO1xuICAgICAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKTtcblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYWRkUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkLXByb2plY3QtYnRuXCIpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGRcIjtcblxuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2FuY2VsLWFkZC1wcm9qZWN0LWJ0blwiKTtcbiAgICAgICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgXG4gICAgICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcbiAgICAgICAgaGFuZGxlTmV3UHJvamVjdHMocHJvamVjdHMpO1xuICAgIH0pXG4gICAgXG59O1xuXG5mdW5jdGlvbiBoYW5kbGVOZXdQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLWFkZC1wcm9qZWN0LWJ0blwiKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dHRlZE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtaW5wdXRcIikudmFsdWU7XG4gICAgICAgIGFkZE5ld1Byb2plY3QoaW5wdXR0ZWROYW1lKTtcbiAgICAgICAgY29uc29sZS50YWJsZSh0b0Rvc09iaik7XG4gICAgICAgIGNyZWF0ZUJ1dHRvbnNGb3JFYWNoUHJvamVjdE9uU2lkZWJhcihwcm9qZWN0cyk7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgXG4gICAgfSk7XG4gICAgXG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWZpZWxkXCIpO1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1uZXctcHJvamVjdC1idG5cIik7XG4gICAgICAgIGlmIChmb3JtKSBmb3JtLnJlbW92ZSgpO1xuICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG5cbiAgICB9KVxufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCB7IGNyZWF0ZVRvRG8sIHByaW9yaXRpZXMsIHRvRG9zT2JqLCBhZGRUb0RvT2JqIH0gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkRpdiwgY3JlYXRlQnV0dG9uc0ZvckVhY2hQcm9qZWN0T25TaWRlYmFyLCBjcmVhdGVIZWFkZXIsIGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuL1VJXCI7XG4vLyBpbXBvcnQgeyBhbGVydERhdGUgfSBmcm9tIFwiLi9kYXRlc1wiO1xuXG4vLyBjcmVhdGluZyB0aHJlZSBuZXcgdG9kb3Mgd2l0aCBjcmVhdGVUb0RvIGZ1bmN0aW9uXG5jb25zdCBuZXdEbyA9IGNyZWF0ZVRvRG8oXCJNaWxrXCIsIFwiQnV5IHNvbWUgbWlsayBmb3IgdGhlIGNhdFwiLCBcIlNvbWUgZGF5XCIsIHByaW9yaXRpZXMudmVyeSk7XG5jb25zdCBhbm90aGVyRG8gPSBjcmVhdGVUb0RvKFwiV3JpdGluZ1wiLCBcIldyaXRlIHNvbWUgdGV4dCB0byBteSBib29rXCIsIFwiVG9kYXlcIiwgcHJpb3JpdGllcy5ub3QsIHRydWUpO1xuY29uc3QgdGhpcmRUb0RvID0gY3JlYXRlVG9EbyhcIkJ1eSBjYXQgZm9vZFwiLCBcIkJ1eSBzb21lIGtpdGVrYXRcIiwgXCJUb2RheVwiLCBwcmlvcml0aWVzLnZlcnkpO1xuXG5cbi8vIGFkZGluZyBwcmV2aW91c2x5IGNyZWF0ZWQgdG9kb3MgdG8gdGhlIG9iamVjdCBob2xkaW5nIHRvZG9zIHdpdGggdGhlIGFkZFRvRG9PYmogZnVuY3Rpb25cbmFkZFRvRG9PYmoobmV3RG8pO1xuYWRkVG9Eb09iaihhbm90aGVyRG8vKiwgZS5nLiBob21lKi8pOyAvLyBvcHRpb25hbCBhcmd1bWVudCB0aGF0IHNwZWNpZmllcyB0aGUgcHJvamVjdCB0byBwdXQgdGhlIHRvLWRvIGludG9cbmFkZFRvRG9PYmoodGhpcmRUb0RvKTtcblxuXG4oZnVuY3Rpb24gY3JlYXRlUGFnZSgpIHtcbiAgICBjcmVhdGVIZWFkZXIoXCJMaWthIGkgWWFcIik7XG4gICAgY3JlYXRlTWFpbkRpdigpO1xuICAgIGNyZWF0ZUJ1dHRvbnNGb3JFYWNoUHJvamVjdE9uU2lkZWJhcih0b0Rvc09iaik7XG4gICAgZGlzcGxheVByb2plY3RzKHRvRG9zT2JqKTtcbn0pKCk7Il0sIm5hbWVzIjpbImNyZWF0ZVRvRG8iLCJ0aXRsZSIsImRlc2MiLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJjb21wbGV0ZWQiLCJpZCIsIkRhdGUiLCJub3ciLCJwcmlvcml0aWVzIiwidG9Eb3NPYmoiLCJhZGRUb0RvT2JqIiwidG9EbyIsInByb2plY3QiLCJwdXNoIiwiZGlzcGxheVByb2plY3RzIiwicHJvamVjdHMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW5IZWFkZXIiLCJ0ZXh0Q29udGVudCIsImNvbnNvbGUiLCJsb2ciLCJ1bCIsImNyZWF0ZUVsZW1lbnQiLCJpdGVtIiwibGkiLCJjbGFzc0xpc3QiLCJhZGQiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwibWFpbkRpdiIsIm5ld0RvIiwiYW5vdGhlckRvIiwidGhpcmRUb0RvIiwibmFtZSIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUhlYWRlciIsImNyZWF0ZU1haW5EaXYiLCJjcmVhdGVCdXR0b25zRm9yRWFjaFByb2plY3RPblNpZGViYXIiLCJwcm9qZWN0c0RpdiIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0c0tleXMiLCJwcm9qZWN0SGVhZGVyIiwiYnV0dG9uTmFtZSIsImFkZEJ1dHRvbiIsImZvcm0iLCJpbnB1dEZpZWxkIiwiYWRkUHJvamVjdEJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImFkZEJ0biIsImNhbmNlbEJ0biIsImlucHV0dGVkTmFtZSIsInZhbHVlIiwidGFibGUiLCJyZW1vdmUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJoYW5kbGVOZXdQcm9qZWN0cyJdLCJzb3VyY2VSb290IjoiIn0=