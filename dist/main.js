(()=>{"use strict";const t=(t,e,n,o="important",c=!1)=>({id:Date.now(),title:t,desc:e,dueDate:n,priority:o,completed:c}),e="very important",n={default:[],home:[],work:[]},o=(t,e="default")=>(n[e].push(t),n);const c=t("Milk","Buy some milk for the cat","Some day",e),d=t("Writing","Write some text to my book","Today","not important",!0),i=t("Buy cat food","Buy some kitekat","Today",e);var r;o(c),o(d),o(i),console.log(n),function(t){const e=document.getElementById("main"),n=document.createElement("h1");n.textContent="Lika i Ya",n.setAttribute("id","mainHeader"),e.appendChild(n)}(),function(){const t=document.getElementById("main"),e=document.createElement("div");e.setAttribute("id","mainDiv"),t.appendChild(e)}(),function t(e){const o=document.querySelector("#projects-div"),c=Object.keys(e);o.innerHTML="";const d=document.createElement("h3");return d.textContent="Projects",o.appendChild(d),c.forEach((t=>{const e=document.createElement("button");e.classList.add("projects-list-button"),e.textContent=t,o.appendChild(e)})),function(e,o){const c=document.querySelector("#projects-div"),d=document.createElement("button");d.textContent="New project +",d.setAttribute("id","add-new-project-btn"),c.appendChild(d),d.addEventListener("click",(()=>{const e=document.createElement("form");e.classList.add("input-field");const i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("id","project-input"),i.setAttribute("maxlength","24"),i.setAttribute("placeholder","Enter project name");const r=document.createElement("button");r.setAttribute("type","button"),r.setAttribute("id","add-project-btn"),r.textContent="Add";const a=document.createElement("button");a.setAttribute("type","button"),a.setAttribute("id","cancel-add-project-btn"),a.textContent="Cancel",e.appendChild(i),e.appendChild(r),e.appendChild(a),c.appendChild(e),d.setAttribute("disabled",!0),function(e){const o=document.getElementById("add-project-btn"),c=document.querySelector("#cancel-add-project-btn");o.addEventListener("click",(()=>{const o=document.getElementById("project-input").value;n[o]=[],console.table(n),t(e)})),c.addEventListener("click",(()=>{const t=document.querySelector(".input-field"),e=document.querySelector("#add-new-project-btn");t&&t.remove(),e.removeAttribute("disabled")}))}(o)}))}(0,e),o}(n),r=n,document.querySelectorAll(".projects-list-button").forEach((t=>{t.addEventListener("click",(()=>{mainHeader.textContent=t.textContent,console.log(r[t.textContent]);const e=document.createElement("ul");r[t.textContent].forEach((t=>{const n=document.createElement("li");n.classList.add("li-element"),Object.keys(t).forEach((e=>{if("title"===e||"desc"===e||"dueDate"===e){const o=document.createElement("p");o.innerHTML=t[e],n.appendChild(o)}})),e.appendChild(n)})),mainDiv.innerHTML="",mainDiv.appendChild(e)}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQmdDLE1GbEdsRTlDLEVFbUdrQjZDLEdGbkdNLEdFb0dwQnBDLFFBQVFzQyxNQUFNL0MsR0FDZHVCLEVBQXFDZixFQUFTLElBSWxEb0MsRUFBVU4saUJBQWlCLFNBQVMsS0FDaEMsTUFBTUMsRUFBTzFCLFNBQVNZLGNBQWMsZ0JBQzlCUSxFQUFTcEIsU0FBU1ksY0FBYyx3QkFDbENjLEdBQU1BLEVBQUtTLFNBQ2ZmLEVBQU9nQixnQkFBZ0IsV0FBVyxHQUcxQyxDQXhCUUMsQ0FBa0IxQyxFQUFTLEdBR25DLENBL0ZJaUMsQ0FBaUIsRUFBaUJqQyxHQUMzQmdCLENBQ1gsQ0REQUQsQ0FBcUN2QixHQ2VMUSxFRGJoQlIsRUNlSWEsU0FBU3NDLGlCQUFpQix5QkFFbENwQixTQUFRRSxJQUVaQSxFQUFPSyxpQkFBaUIsU0FBUyxLQUU3QnZCLFdBQVdFLFlBQWNnQixFQUFPaEIsWUFDaENSLFFBQVFDLElBQUlGLEVBQVN5QixFQUFPaEIsY0FFNUIsTUFBTW1DLEVBQUt2QyxTQUFTRyxjQUFjLE1BRWxDUixFQUFTeUIsRUFBT2hCLGFBQWFjLFNBQVFzQixJQUVqQyxNQUFNQyxFQUFLekMsU0FBU0csY0FBYyxNQUNsQ3NDLEVBQUdwQixVQUFVQyxJQUFJLGNBRWpCUixPQUFPQyxLQUFLeUIsR0FBTXRCLFNBQVFDLElBRXRCLEdBQVksVUFBUkEsR0FBMkIsU0FBUkEsR0FBMEIsWUFBUkEsRUFBbUIsQ0FFeEQsTUFBTXVCLEVBQUkxQyxTQUFTRyxjQUFjLEtBRWpDdUMsRUFBRTFCLFVBQVl3QixFQUFLckIsR0FFbkJzQixFQUFHbkMsWUFBWW9DLEVBQ25CLEtBR0pILEVBQUdqQyxZQUFZbUMsRUFBRyxJQUd0QmpDLFFBQVFRLFVBQVksR0FFcEJSLFFBQVFGLFlBQVlpQyxFQUFHLEdBRTFCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL1VJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vRmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdG8tZG8gb2JqZWN0c1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvRG8gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5ID0gXCJpbXBvcnRhbnRcIiwgY29tcGxldGVkID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCA6IERhdGUubm93KCksXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSwgXG4gICAgICAgIGNvbXBsZXRlZFxuICAgIH1cbn07XG5cbi8vIE9iamVjdCB0aGF0IGhvbGRzIHByaW9yaXRpZXNcbmV4cG9ydCBjb25zdCBwcmlvcml0aWVzID0ge1xuICAgIFwidmVyeVwiOiBcInZlcnkgaW1wb3J0YW50XCIsXG4gICAgXCJpbXBvcnRhbnRcIjogXCJpbXBvcnRhbnRcIixcbiAgICBcIm5vdFwiOiBcIm5vdCBpbXBvcnRhbnRcIixcbn07XG5cbi8vIE9iaiB0aGF0IHN0b3JlcyB0by1kb3MgYXJyYXlzIGFuZCBwcm9qZWN0IG5hbWVzXG5cbmV4cG9ydCBjb25zdCB0b0Rvc09iaiA9IHtcbiAgICBcImRlZmF1bHRcIjogW10sXG4gICAgXCJob21lXCI6IFtdLFxuICAgIFwid29ya1wiOiBbXSxcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCB0by1kb3MgdG8gdG9Eb3Mgb2JqZWN0XG5cbmV4cG9ydCBjb25zdCBhZGRUb0RvT2JqID0gKHRvRG8sIHByb2plY3QgPSBcImRlZmF1bHRcIikgPT4ge1xuICAgIHRvRG9zT2JqW3Byb2plY3RdLnB1c2godG9Ebyk7XG4gICAgcmV0dXJuIHRvRG9zT2JqO1xufTtcblxuLy8gRnVuY3Rpb24gdG8gYWRkIG5ldyBwcm9qZWN0c1xuXG5leHBvcnQgY29uc3QgYWRkTmV3UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHRvRG9zT2JqW3Byb2plY3ROYW1lXSA9IFtdO1xuICAgIHJldHVybiB0b0Rvc09iajtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsImltcG9ydCB7IGNyZWF0ZVRvRG8sIHByaW9yaXRpZXMsIHRvRG9zT2JqLCBhZGRUb0RvT2JqLCBhZGROZXdQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuaW1wb3J0IHsgY3JlYXRlTWFpbkRpdiwgY3JlYXRlQnV0dG9uc0ZvckVhY2hQcm9qZWN0T25TaWRlYmFyLCBjcmVhdGVIZWFkZXIsIGRpc3BsYXlQcm9qZWN0cyB9IGZyb20gXCIuL1VJXCI7XG4vLyBpbXBvcnQgeyBhbGVydERhdGUgfSBmcm9tIFwiLi9kYXRlc1wiO1xuXG4vLyBjcmVhdGluZyB0aHJlZSBuZXcgdG9kb3Mgd2l0aCBjcmVhdGVUb0RvIGZ1bmN0aW9uXG5jb25zdCBuZXdEbyA9IGNyZWF0ZVRvRG8oXCJNaWxrXCIsIFwiQnV5IHNvbWUgbWlsayBmb3IgdGhlIGNhdFwiLCBcIlNvbWUgZGF5XCIsIHByaW9yaXRpZXMudmVyeSk7XG5jb25zdCBhbm90aGVyRG8gPSBjcmVhdGVUb0RvKFwiV3JpdGluZ1wiLCBcIldyaXRlIHNvbWUgdGV4dCB0byBteSBib29rXCIsIFwiVG9kYXlcIiwgcHJpb3JpdGllcy5ub3QsIHRydWUpO1xuY29uc3QgdGhpcmRUb0RvID0gY3JlYXRlVG9EbyhcIkJ1eSBjYXQgZm9vZFwiLCBcIkJ1eSBzb21lIGtpdGVrYXRcIiwgXCJUb2RheVwiLCBwcmlvcml0aWVzLnZlcnkpO1xuXG4vLyBmdW5jdGlvbiBhZGRpbmdOZXdQcm9qZWN0KG5hbWUpIHsgISEhQ2FuIGJlIGRvbmUgbGF0ZXIgbGlrZSB0aGlzISEhXG4vLyAgICAgYWRkTmV3UHJvamVjdChuYW1lKTtcbi8vICAgICBjcmVhdGVCdXR0b25zRm9yRWFjaFByb2plY3RPblNpZGViYXIodG9Eb3NPYmopO1xuLy8gICAgIGRpc3BsYXlQcm9qZWN0cyh0b0Rvc09iaik7XG4vLyB9XG5cbi8vIGFkZGluZyBwcmV2aW91c2x5IGNyZWF0ZWQgdG9kb3MgdG8gdGhlIG9iamVjdCBob2xkaW5nIHRvZG9zIHdpdGggdGhlIGFkZFRvRG9PYmogZnVuY3Rpb25cbmFkZFRvRG9PYmoobmV3RG8pO1xuYWRkVG9Eb09iaihhbm90aGVyRG8vKiwgZS5nLiBob21lKi8pOyAvLyBvcHRpb25hbCBhcmd1bWVudCB0aGF0IHNwZWNpZmllcyB0aGUgcHJvamVjdCB0byBwdXQgdGhlIHRvLWRvIGludG9cbmFkZFRvRG9PYmoodGhpcmRUb0RvKTtcblxuXG4vLyBjb25zb2xlLnRhYmxlKHRvRG9zT2JqW1wiaG9tZVwiXSk7XG4vLyBjb25zb2xlLnRhYmxlKHRvRG9zT2JqW1wiZGVmYXVsdFwiXSk7XG5cbmNvbnNvbGUubG9nKHRvRG9zT2JqKVxuXG5cbi8vIGNyZWF0aW5nIHRoZSBoZWFkZXIgZm9yIHRoZSBtYWluRGl2XG5jcmVhdGVIZWFkZXIoXCJMaWthIGkgWWFcIik7XG5cbi8vcmVuZGVyaW5nIHRoZSBtYWluRGl2IGludG8gdGhlIG1haW4gXG5jcmVhdGVNYWluRGl2KCk7XG5cbi8vIHJlbmRlcmluZyB0aGUgcHJvamVjdCBuYW1lcyBpbnRvIGJ1dHRvbnMgZnJvbSB0aGUgb2JqZWN0IHRvIHRoZSBwcm9qZWN0cy1kaXZcbmNyZWF0ZUJ1dHRvbnNGb3JFYWNoUHJvamVjdE9uU2lkZWJhcih0b0Rvc09iaik7XG5cbmRpc3BsYXlQcm9qZWN0cyh0b0Rvc09iaik7XG5cblxuLy8gYWRkaW5nTmV3UHJvamVjdChcIm15c3Rpa2FsbGxcIik7IiwiaW1wb3J0IHsgdG9Eb3NPYmogfSBmcm9tIFwiLi9jcmVhdGVUb0RvXCI7XG5pbXBvcnQgeyBhZGROZXdQcm9qZWN0IH0gZnJvbSBcIi4vY3JlYXRlVG9Eb1wiO1xuXG4vL0Z1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZGl2IGluc2lkZSB0aGUgbWFpbiBwYXJ0IG9mIHRoZSBzY3JlZW5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWluRGl2KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5EaXZcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgICBcbiAgICByZXR1cm4geyBtYWluLCBtYWluRGl2IH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIHJlbmRlciB0aGUgcHJvamVjdHMgdG8gdGhlIERPTSBhcyBidXR0b25zIChpbnRvIHRoZSBwcm9qZWN0cy1kaXYpLCBleHBvcnRlZCB0byB1c2UgaW4gaW5kZXguanNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b25zRm9yRWFjaFByb2plY3RPblNpZGViYXIocHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMtZGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RzS2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3RzKTtcblxuICAgIC8vQ2xlYXIgb3V0IHRoZSBwcm9qZWN0cyBkaXYgZmlyc3QgQUxXQVlTIENMRUFSIE9VVCBCRUZPUkUgQURESU5HIE5FV1xuICAgIHByb2plY3RzRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuXG4gICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XG5cbiAgICAvL0NyZWF0aW5nIGJ1dHRvbnMgZnJvbSB0b0Rvc09iaiBrZXlzXG4gICAgcHJvamVjdHNLZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1saXN0LWJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0ga2V5O1xuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH0pO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbihcIk5ldyBwcm9qZWN0ICtcIiwgcHJvamVjdHMpXG4gICAgcmV0dXJuIHByb2plY3RzRGl2O1xufTtcblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBtYWluRGl2IGhlYWRlciB0aGF0IHNob3VsZCBiZSB1cGRhdGVkXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKG5hbWUpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgbWFpbkhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5IZWFkZXJcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcblxuICAgIHJldHVybiB7IG1haW4sIG1haW5IZWFkZXIgfTtcblxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgIC8vIENob29zaW5nIGFsbCB0aGUgYnV0dG9ucyB3aXRoIHByb2plY3RuYW1lcyBcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0cy1saXN0LWJ1dHRvblwiKTtcbiAgICAvLyBJdGVyYXRpbmcgdGhyb3VnaCB0aG9zZSBidXR0b25zXG4gICAgYnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIC8vIGFkZGluZyBjbGljayBldmVudCBsaXN0ZW5lcnMgdG8gdGhlbVxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIC8vIHVwZGF0aW5nIHRoZSBoZWFkZXJcbiAgICAgICAgICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBidXR0b24udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tidXR0b24udGV4dENvbnRlbnRdKTtcbiAgICAgICAgICAgIC8vIGNyZWF0aW5nIGEgdWwgZWxlbWVudCB0byBob2xkIGFsbCB0aGUgdG9Eb3MgaW5zaWRlXG4gICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgICAgIC8vIGl0ZXJhdGluZyB0aHJvdWdoIGVhY2ggcHJvamVjdHMgYXJyYXkgdGhhdCBob2xkIHRvRG8gb2JqZWN0c1xuICAgICAgICAgICAgcHJvamVjdHNbYnV0dG9uLnRleHRDb250ZW50XS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIC8vY3JlYXRpbmcgYSBsaSBlbGVtZW50IHRvIGhvbGQgZWFjaCB0b0RvIG9iamVjdHNcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwibGktZWxlbWVudFwiKTtcbiAgICAgICAgICAgICAgICAvLyBpdGVyYXRpbmcgdGhyb3VnaCBlYWNoIHRvRG8gb2JqIGtleVxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGl0ZW0pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGtleSBlcXVhbHMgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJ0aXRsZVwiIHx8IGtleSA9PT0gXCJkZXNjXCIgfHwga2V5ID09PSBcImR1ZURhdGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgcCBlbGVtZW50IHRvIGhvbGQgdGhlIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHB1dHRpbmcgdGhlIHZhbHVlIG9mIHRoZSBrZXkgaW5zaWRlIHRoZSBwIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gaXRlbVtrZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kaW5nIHRoZSBwIGVsZW1lbnQgd2l0aCBpbmZvIHRvIHRoZSBsaSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gYXBwZW5kaW5nIHRoZSBsaSBlbGVtZW50IHRvIHRoZSBwYXJlbnQgdWwgZWxlbWVudCBjcmVhdGVkIG9uIGxpbmUgNzhcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gY2xlYXJpbmcgb3V0IHRoZSBtYWluIGRpdiBiZWZvcmUgcmVuZGVyaW5nIHRoZSBjb250ZW50IGluc2lkZVxuICAgICAgICAgICAgbWFpbkRpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgLy9hcHBlbmRpbmcgdGhlIHVsIGluc2lkZSB0aGUgbWFpbkRpdlxuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdEJ1dHRvbihidXR0b25OYW1lLCBwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1kaXZcIik7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBidXR0b25OYW1lO1xuICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZC1uZXctcHJvamVjdC1idG5cIilcbiAgICBcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIFxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImlucHV0LWZpZWxkXCIpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgIGlucHV0RmllbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LWlucHV0XCIpO1xuICAgICAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjI0XCIpO1xuICAgICAgICBpbnB1dEZpZWxkLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRW50ZXIgcHJvamVjdCBuYW1lXCIpO1xuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGQtcHJvamVjdC1idG5cIik7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYW5jZWwtYWRkLXByb2plY3QtYnRuXCIpO1xuICAgICAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgICAgICBcbiAgICAgICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xuICAgICAgICBoYW5kbGVOZXdQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgfSlcbiAgICBcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZU5ld1Byb2plY3RzKHByb2plY3RzKSB7XG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdC1idG5cIik7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtYWRkLXByb2plY3QtYnRuXCIpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0dGVkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1pbnB1dFwiKS52YWx1ZTtcbiAgICAgICAgYWRkTmV3UHJvamVjdChpbnB1dHRlZE5hbWUpO1xuICAgICAgICBjb25zb2xlLnRhYmxlKHRvRG9zT2JqKTtcbiAgICAgICAgY3JlYXRlQnV0dG9uc0ZvckVhY2hQcm9qZWN0T25TaWRlYmFyKHByb2plY3RzKTtcbiAgICBcbiAgICB9KTtcbiAgICBcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtZmllbGRcIik7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLW5ldy1wcm9qZWN0LWJ0blwiKTtcbiAgICAgICAgaWYgKGZvcm0pIGZvcm0ucmVtb3ZlKCk7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcblxuICAgIH0pXG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbImNyZWF0ZVRvRG8iLCJ0aXRsZSIsImRlc2MiLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJjb21wbGV0ZWQiLCJpZCIsIkRhdGUiLCJub3ciLCJwcmlvcml0aWVzIiwidG9Eb3NPYmoiLCJhZGRUb0RvT2JqIiwidG9EbyIsInByb2plY3QiLCJwdXNoIiwibmV3RG8iLCJhbm90aGVyRG8iLCJ0aGlyZFRvRG8iLCJwcm9qZWN0cyIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwibWFpbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtYWluSGVhZGVyIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVIZWFkZXIiLCJtYWluRGl2IiwiY3JlYXRlTWFpbkRpdiIsImNyZWF0ZUJ1dHRvbnNGb3JFYWNoUHJvamVjdE9uU2lkZWJhciIsInByb2plY3RzRGl2IiwicXVlcnlTZWxlY3RvciIsInByb2plY3RzS2V5cyIsIk9iamVjdCIsImtleXMiLCJpbm5lckhUTUwiLCJwcm9qZWN0SGVhZGVyIiwiZm9yRWFjaCIsImtleSIsImJ1dHRvbiIsImNsYXNzTGlzdCIsImFkZCIsImJ1dHRvbk5hbWUiLCJhZGRCdXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZm9ybSIsImlucHV0RmllbGQiLCJhZGRQcm9qZWN0QnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwiYWRkQnRuIiwiY2FuY2VsQnRuIiwiaW5wdXR0ZWROYW1lIiwidmFsdWUiLCJ0YWJsZSIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImhhbmRsZU5ld1Byb2plY3RzIiwicXVlcnlTZWxlY3RvckFsbCIsInVsIiwiaXRlbSIsImxpIiwicCJdLCJzb3VyY2VSb290IjoiIn0=