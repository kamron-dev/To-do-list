(()=>{"use strict";const t={default:[],home:[],work:[]},e=(e,o="default")=>(t[o].push(e),t),o=(t,e,o,n="important",i=!1)=>({id:Date.now(),title:t,desc:e,dueDate:o,priority:n,completed:i}),n=o("Milk","Buy some milk for the cat","Some day","very important"),i=o("Writing","Write some text to my book","Today","not important",!0);e(n),e(i),console.table(t.home),console.table(t.default),console.log(t),function(t){const e=document.querySelector("#projects-div"),o=Object.keys(t);var n;n=e,o.forEach((t=>{const e=document.createElement("button");e.textContent=t,n.appendChild(e)}))}(t),function(){const t=document.getElementById("main"),e=document.createElement("div");e.setAttribute("id","mainDiv"),t.appendChild(e)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ08sTUFBTUEsRUFBVyxDQUNwQixRQUFXLEdBQ1gsS0FBUSxHQUNSLEtBQVEsSUFJQ0MsRUFBYSxDQUFDQyxFQUFNQyxFQUFVLGFBQ3ZDSCxFQUFTRyxHQUFTQyxLQUFLRixHQUNoQkYsR0NURUssRUFBYSxDQUFDQyxFQUFPQyxFQUFNQyxFQUFTQyxFQUFXLFlBQWFDLEdBQVksS0FDMUUsQ0FDSEMsR0FBS0MsS0FBS0MsTUFDVlAsUUFDQUMsT0FDQUMsVUFDQUMsV0FDQUMsY0NGRkksRUFBUVQsRUFBVyxPQUFRLDRCQUE2QixXRFFsRCxrQkNQTlUsRUFBWVYsRUFBVyxVQUFXLDZCQUE4QixRRFMzRCxpQkNUb0YsR0FHL0ZKLEVBQVdhLEdBQ1hiLEVBQVdjLEdBR1hDLFFBQVFDLE1BQU1qQixFQUFlLE1BQzdCZ0IsUUFBUUMsTUFBTWpCLEVBQWtCLFNBRWhDZ0IsUUFBUUUsSUFBSWxCLEdDUkwsU0FBd0JtQixHQUMzQixNQUFNQyxFQUFjQyxTQUFTQyxjQUFjLGlCQUNyQ0MsRUFBZUMsT0FBT0MsS0FBS04sR0FlckMsSUFBNkJPLElBUkdOLEVBQWRHLEVBU1RJLFNBQVFDLElBQ1QsTUFBTUMsRUFBU1IsU0FBU1MsY0FBYyxVQUN0Q0QsRUFBT0UsWUFBY0gsRUFDckJGLEVBQWNNLFlBQVlILEVBQU8sR0FUekMsQ0REQUksQ0FBZWpDLEdDcEJSLFdBQ0gsTUFBTWtDLEVBQU9iLFNBQVNjLGVBQWUsUUFDL0JDLEVBQVVmLFNBQVNTLGNBQWMsT0FDdkNNLEVBQVFDLGFBQWEsS0FBTSxXQUMzQkgsRUFBS0YsWUFBWUksRUFHckIsQ0RpQkFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy90by1kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3JlYXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9VSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBPYmogdGhhdCBzdG9yZXMgdG8tZG9zIGFycmF5cyBhbmQgcHJvamVjdCBuYW1lc1xuZXhwb3J0IGNvbnN0IHRvRG9zT2JqID0ge1xuICAgIFwiZGVmYXVsdFwiOiBbXSxcbiAgICBcImhvbWVcIjogW10sXG4gICAgXCJ3b3JrXCI6IFtdLFxufTtcblxuLy8gRnVuY3Rpb24gdG8gYWRkIHRvLWRvcyB0byB0b0RvcyBvYmplY3RcbmV4cG9ydCBjb25zdCBhZGRUb0RvT2JqID0gKHRvRG8sIHByb2plY3QgPSBcImRlZmF1bHRcIikgPT4ge1xuICAgIHRvRG9zT2JqW3Byb2plY3RdLnB1c2godG9Ebyk7XG4gICAgcmV0dXJuIHRvRG9zT2JqO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZE5ld1Byb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICB0b0Rvc09ialtwcm9qZWN0TmFtZV0gPSBbXTtcbiAgICByZXR1cm4gdG9Eb3NPYmo7XG59XG5cbi8vYWRkTmV3UHJvamVjdChcIk15c3Rpa2FsXCIpO1xuXG5cblxuIiwiLy9GdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdG8tZG9zXG5leHBvcnQgY29uc3QgY3JlYXRlVG9EbyA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkgPSBcImltcG9ydGFudFwiLCBjb21wbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkIDogRGF0ZS5ub3coKSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2MsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LCBcbiAgICAgICAgY29tcGxldGVkXG4gICAgfVxufTtcblxuLy8gT2JqZWN0IHRoYXQgaG9sZHMgcHJpb3JpdGllc1xuZXhwb3J0IGNvbnN0IHByaW9yaXRpZXMgPSB7XG4gICAgXCJ2ZXJ5XCI6IFwidmVyeSBpbXBvcnRhbnRcIixcbiAgICBcImltcG9ydGFudFwiOiBcImltcG9ydGFudFwiLFxuICAgIFwibm90XCI6IFwibm90IGltcG9ydGFudFwiLFxufTtcblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyB0b0Rvc09iaiwgYWRkVG9Eb09iaiwgYWRkTmV3UHJvamVjdCB9IGZyb20gXCIuL3RvLWRvc1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9EbywgcHJpb3JpdGllcyB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcbmltcG9ydCB7IGNyZWF0ZU1haW5EaXYsIHJlbmRlclByb2plY3RzIH0gZnJvbSBcIi4vVUlcIjtcbmltcG9ydCB7IGFsZXJ0RGF0ZSB9IGZyb20gXCIuL2RhdGVzXCI7XG5cbi8vIGNyZWF0aW5nIHR3byBuZXcgdG9kb3Mgd2l0aCBjcmVhdGVUb0RvIGZ1bmN0aW9uXG5jb25zdCBuZXdEbyA9IGNyZWF0ZVRvRG8oXCJNaWxrXCIsIFwiQnV5IHNvbWUgbWlsayBmb3IgdGhlIGNhdFwiLCBcIlNvbWUgZGF5XCIsIHByaW9yaXRpZXMudmVyeSk7XG5jb25zdCBhbm90aGVyRG8gPSBjcmVhdGVUb0RvKFwiV3JpdGluZ1wiLCBcIldyaXRlIHNvbWUgdGV4dCB0byBteSBib29rXCIsIFwiVG9kYXlcIiwgcHJpb3JpdGllcy5ub3QsIHRydWUpO1xuXG4vLyBhZGRpbmcgcHJldmlvdXNseSBjcmVhdGVkIHRvZG9zIHRvIHRoZSBvYmplY3QgaG9sZGluZyB0b2RvcyB3aXRoIHRoZSBhZGRUb0RvT2JqIGZ1bmN0aW9uXG5hZGRUb0RvT2JqKG5ld0RvKTtcbmFkZFRvRG9PYmooYW5vdGhlckRvKTtcblxuXG5jb25zb2xlLnRhYmxlKHRvRG9zT2JqW1wiaG9tZVwiXSk7XG5jb25zb2xlLnRhYmxlKHRvRG9zT2JqW1wiZGVmYXVsdFwiXSk7XG5cbmNvbnNvbGUubG9nKHRvRG9zT2JqKVxuXG4vLyByZW5kZXJpbmcgdGhlIHByb2plY3RzIGZyb20gdGhlIG9iamVjdCB0byB0aGUgcHJvamVjdHMtZGl2XG5yZW5kZXJQcm9qZWN0cyh0b0Rvc09iaik7XG5cblxuLy9yZW5kZXJpbmcgdGhlIG1haW5EaXYgaW50byB0aGUgbWFpbiBcbmNyZWF0ZU1haW5EaXYoKTtcblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1haW5EaXYoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbkRpdlwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5EaXYpO1xuXG4gICAgcmV0dXJuIG1haW5cbn07XG4vLyBGdW5jdGlvbiB0byByZW5kZXIgdGhlIHByb2plY3RzIHRvIHRoZSBET00gKGludG8gdGhlIHByb2plY3RzLWRpdiksIGV4cG9ydGVkIHRvIHVzZSBpbiBpbmRleC5qc1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RzKSB7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWRpdlwiKVxuICAgIGNvbnN0IHByb2plY3RzS2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3RzKTtcblxuICAgIC8vIHByb2plY3RzS2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgLy8gICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgLy8gICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGtleTtcbiAgICAvLyAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAvLyB9KTtcbiAgICBjcmVhdGVCdXR0b25zKHByb2plY3RzS2V5cywgcHJvamVjdHNEaXYpO1xuXG4gICAgcmV0dXJuIHByb2plY3RzRGl2O1xufTtcblxuXG4vKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGJ1dHRvbnMgZnJvbSBvYmplY3Qga2V5cyBzbyBcbnRoYXQgdGhlIGZ1bmN0aW9uIGFib3ZlIG9ubHkgaGFzIG9uZSByZXNwb25zaWJpbGl0eSAoU29saWQpICovXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25zKGtleXMsIGRpdlRvQXBwZW5kVG8pIHtcbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0ga2V5O1xuICAgICAgICBkaXZUb0FwcGVuZFRvLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGRpdlRvQXBwZW5kVG87XG59OyJdLCJuYW1lcyI6WyJ0b0Rvc09iaiIsImFkZFRvRG9PYmoiLCJ0b0RvIiwicHJvamVjdCIsInB1c2giLCJjcmVhdGVUb0RvIiwidGl0bGUiLCJkZXNjIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiY29tcGxldGVkIiwiaWQiLCJEYXRlIiwibm93IiwibmV3RG8iLCJhbm90aGVyRG8iLCJjb25zb2xlIiwidGFibGUiLCJsb2ciLCJwcm9qZWN0cyIsInByb2plY3RzRGl2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicHJvamVjdHNLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImRpdlRvQXBwZW5kVG8iLCJmb3JFYWNoIiwia2V5IiwiYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJQcm9qZWN0cyIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsIm1haW5EaXYiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVNYWluRGl2Il0sInNvdXJjZVJvb3QiOiIifQ==