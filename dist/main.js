(()=>{"use strict";const t={default:[],home:[],work:[]},e=(e,o="default")=>(t[o].push(e),t),o=(t,e,o,n="important",i=!1)=>({id:Date.now(),title:t,desc:e,dueDate:o,priority:n,completed:i}),n="very important",i=o("Milk","Buy some milk for the cat","Some day",n),a=o("Writing","Write some text to my book","Today","not important",!0),c=o("Buy cat food","Buy some kitekat","Today",n);e(i),e(a),e(c),console.table(t.home),console.table(t.default),console.log(t),function(t){const e=document.querySelector("#projects-div"),o=Object.keys(t);var n;n=e,o.forEach((t=>{const e=document.createElement("button");e.textContent=t,n.appendChild(e)}))}(t),function(){const t=document.getElementById("main"),e=document.createElement("div");e.setAttribute("id","mainDiv"),t.appendChild(e)}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ08sTUFBTUEsRUFBVyxDQUNwQixRQUFXLEdBQ1gsS0FBUSxHQUNSLEtBQVEsSUFJQ0MsRUFBYSxDQUFDQyxFQUFNQyxFQUFVLGFBQ3ZDSCxFQUFTRyxHQUFTQyxLQUFLRixHQUNoQkYsR0NURUssRUFBYSxDQUFDQyxFQUFPQyxFQUFNQyxFQUFTQyxFQUFXLFlBQWFDLEdBQVksS0FDMUUsQ0FDSEMsR0FBS0MsS0FBS0MsTUFDVlAsUUFDQUMsT0FDQUMsVUFDQUMsV0FDQUMsY0FLS0ksRUFDRCxpQkNSTkMsRUFBUVYsRUFBVyxPQUFRLDRCQUE2QixXQUFZUyxHQUNwRUUsRUFBWVgsRUFBVyxVQUFXLDZCQUE4QixRRFMzRCxpQkNUb0YsR0FDekZZLEVBQVlaLEVBQVcsZUFBZSxtQkFBb0IsUUFBU1MsR0FHekViLEVBQVdjLEdBQ1hkLEVBQVdlLEdBQ1hmLEVBQVdnQixHQUdYQyxRQUFRQyxNQUFNbkIsRUFBZSxNQUM3QmtCLFFBQVFDLE1BQU1uQixFQUFrQixTQUVoQ2tCLFFBQVFFLElBQUlwQixHQ1RMLFNBQWlDcUIsR0FDcEMsTUFBTUMsRUFBY0MsU0FBU0MsY0FBYyxpQkFDckNDLEVBQWVDLE9BQU9DLEtBQUtOLEdBZXJDLElBQTZCTyxJQVJHTixFQUFkRyxFQVNUSSxTQUFRQyxJQUNULE1BQU1DLEVBQVNSLFNBQVNTLGNBQWMsVUFDdENELEVBQU9FLFlBQWNILEVBQ3JCRixFQUFjTSxZQUFZSCxFQUFPLEdBVHpDLENEQUFJLENBQXdCbkMsR0NyQmpCLFdBQ0gsTUFBTW9DLEVBQU9iLFNBQVNjLGVBQWUsUUFDL0JDLEVBQVVmLFNBQVNTLGNBQWMsT0FDdkNNLEVBQVFDLGFBQWEsS0FBTSxXQUMzQkgsRUFBS0YsWUFBWUksRUFHckIsQ0RrQkFFLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy90by1kb3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3JlYXRlVG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9VSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBPYmogdGhhdCBzdG9yZXMgdG8tZG9zIGFycmF5cyBhbmQgcHJvamVjdCBuYW1lc1xuZXhwb3J0IGNvbnN0IHRvRG9zT2JqID0ge1xuICAgIFwiZGVmYXVsdFwiOiBbXSxcbiAgICBcImhvbWVcIjogW10sXG4gICAgXCJ3b3JrXCI6IFtdLFxufTtcblxuLy8gRnVuY3Rpb24gdG8gYWRkIHRvLWRvcyB0byB0b0RvcyBvYmplY3RcbmV4cG9ydCBjb25zdCBhZGRUb0RvT2JqID0gKHRvRG8sIHByb2plY3QgPSBcImRlZmF1bHRcIikgPT4ge1xuICAgIHRvRG9zT2JqW3Byb2plY3RdLnB1c2godG9Ebyk7XG4gICAgcmV0dXJuIHRvRG9zT2JqO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZE5ld1Byb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICB0b0Rvc09ialtwcm9qZWN0TmFtZV0gPSBbXTtcbiAgICByZXR1cm4gdG9Eb3NPYmo7XG59XG5cbi8vYWRkTmV3UHJvamVjdChcIk15c3Rpa2FsXCIpO1xuXG5cblxuIiwiLy9GdW5jdGlvbiB0aGF0IGNyZWF0ZXMgdG8tZG9zXG5leHBvcnQgY29uc3QgY3JlYXRlVG9EbyA9ICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkgPSBcImltcG9ydGFudFwiLCBjb21wbGV0ZWQgPSBmYWxzZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkIDogRGF0ZS5ub3coKSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2MsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5LCBcbiAgICAgICAgY29tcGxldGVkXG4gICAgfVxufTtcblxuLy8gT2JqZWN0IHRoYXQgaG9sZHMgcHJpb3JpdGllc1xuZXhwb3J0IGNvbnN0IHByaW9yaXRpZXMgPSB7XG4gICAgXCJ2ZXJ5XCI6IFwidmVyeSBpbXBvcnRhbnRcIixcbiAgICBcImltcG9ydGFudFwiOiBcImltcG9ydGFudFwiLFxuICAgIFwibm90XCI6IFwibm90IGltcG9ydGFudFwiLFxufTtcblxuXG5cblxuXG5cblxuXG4iLCJpbXBvcnQgeyB0b0Rvc09iaiwgYWRkVG9Eb09iaiwgYWRkTmV3UHJvamVjdCB9IGZyb20gXCIuL3RvLWRvc1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9EbywgcHJpb3JpdGllcyB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcbmltcG9ydCB7IGNyZWF0ZU1haW5EaXYsIHJlbmRlclByb2plY3RzVG9CdXR0b25zIH0gZnJvbSBcIi4vVUlcIjtcbmltcG9ydCB7IGFsZXJ0RGF0ZSB9IGZyb20gXCIuL2RhdGVzXCI7XG5cbi8vIGNyZWF0aW5nIHR3byBuZXcgdG9kb3Mgd2l0aCBjcmVhdGVUb0RvIGZ1bmN0aW9uXG5jb25zdCBuZXdEbyA9IGNyZWF0ZVRvRG8oXCJNaWxrXCIsIFwiQnV5IHNvbWUgbWlsayBmb3IgdGhlIGNhdFwiLCBcIlNvbWUgZGF5XCIsIHByaW9yaXRpZXMudmVyeSk7XG5jb25zdCBhbm90aGVyRG8gPSBjcmVhdGVUb0RvKFwiV3JpdGluZ1wiLCBcIldyaXRlIHNvbWUgdGV4dCB0byBteSBib29rXCIsIFwiVG9kYXlcIiwgcHJpb3JpdGllcy5ub3QsIHRydWUpO1xuY29uc3QgdGhpcmRUb0RvID0gY3JlYXRlVG9EbyhcIkJ1eSBjYXQgZm9vZFwiLFwiQnV5IHNvbWUga2l0ZWthdFwiLCBcIlRvZGF5XCIsIHByaW9yaXRpZXMudmVyeSk7XG5cbi8vIGFkZGluZyBwcmV2aW91c2x5IGNyZWF0ZWQgdG9kb3MgdG8gdGhlIG9iamVjdCBob2xkaW5nIHRvZG9zIHdpdGggdGhlIGFkZFRvRG9PYmogZnVuY3Rpb25cbmFkZFRvRG9PYmoobmV3RG8pO1xuYWRkVG9Eb09iaihhbm90aGVyRG8pO1xuYWRkVG9Eb09iaih0aGlyZFRvRG8pO1xuXG5cbmNvbnNvbGUudGFibGUodG9Eb3NPYmpbXCJob21lXCJdKTtcbmNvbnNvbGUudGFibGUodG9Eb3NPYmpbXCJkZWZhdWx0XCJdKTtcblxuY29uc29sZS5sb2codG9Eb3NPYmopXG5cbi8vIHJlbmRlcmluZyB0aGUgcHJvamVjdHMgZnJvbSB0aGUgb2JqZWN0IHRvIHRoZSBwcm9qZWN0cy1kaXZcbnJlbmRlclByb2plY3RzVG9CdXR0b25zKHRvRG9zT2JqKTtcblxuXG4vL3JlbmRlcmluZyB0aGUgbWFpbkRpdiBpbnRvIHRoZSBtYWluIFxuY3JlYXRlTWFpbkRpdigpO1xuXG4iLCIvL0Z1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZGl2IGluc2lkZSB0aGUgbWFpbiBwYXJ0IG9mIHRoZSBzY3JlZW5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWluRGl2KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5EaXZcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluRGl2KTtcblxuICAgIHJldHVybiBtYWluXG59O1xuLy8gRnVuY3Rpb24gdG8gcmVuZGVyIHRoZSBwcm9qZWN0cyB0byB0aGUgRE9NIChpbnRvIHRoZSBwcm9qZWN0cy1kaXYpLCBleHBvcnRlZCB0byB1c2UgaW4gaW5kZXguanNcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0c1RvQnV0dG9ucyhwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1kaXZcIilcbiAgICBjb25zdCBwcm9qZWN0c0tleXMgPSBPYmplY3Qua2V5cyhwcm9qZWN0cyk7XG5cbiAgICAvLyBwcm9qZWN0c0tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgIC8vICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIC8vICAgICBidXR0b24udGV4dENvbnRlbnQgPSBrZXk7XG4gICAgLy8gICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgLy8gfSk7XG4gICAgY3JlYXRlQnV0dG9ucyhwcm9qZWN0c0tleXMsIHByb2plY3RzRGl2KTtcblxuICAgIHJldHVybiBwcm9qZWN0c0Rpdjtcbn07XG5cblxuLyogSGVscGVyIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBidXR0b25zIGZyb20gb2JqZWN0IGtleXMgc28gXG50aGF0IHRoZSBmdW5jdGlvbiBhYm92ZSBvbmx5IGhhcyBvbmUgcmVzcG9uc2liaWxpdHkgKFNvbGlkKSAqL1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9ucyhrZXlzLCBkaXZUb0FwcGVuZFRvKSB7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IGtleTtcbiAgICAgICAgZGl2VG9BcHBlbmRUby5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgIH0pO1xuICAgIHJldHVybiBkaXZUb0FwcGVuZFRvO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKG5hbWUpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWFpbkhlYWRlci50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuXG4gICAgcmV0dXJuIG1haW47XG5cbn0iXSwibmFtZXMiOlsidG9Eb3NPYmoiLCJhZGRUb0RvT2JqIiwidG9EbyIsInByb2plY3QiLCJwdXNoIiwiY3JlYXRlVG9EbyIsInRpdGxlIiwiZGVzYyIsImR1ZURhdGUiLCJwcmlvcml0eSIsImNvbXBsZXRlZCIsImlkIiwiRGF0ZSIsIm5vdyIsInByaW9yaXRpZXMiLCJuZXdEbyIsImFub3RoZXJEbyIsInRoaXJkVG9EbyIsImNvbnNvbGUiLCJ0YWJsZSIsImxvZyIsInByb2plY3RzIiwicHJvamVjdHNEaXYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcm9qZWN0c0tleXMiLCJPYmplY3QiLCJrZXlzIiwiZGl2VG9BcHBlbmRUbyIsImZvckVhY2giLCJrZXkiLCJidXR0b24iLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInJlbmRlclByb2plY3RzVG9CdXR0b25zIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwibWFpbkRpdiIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZU1haW5EaXYiXSwic291cmNlUm9vdCI6IiJ9