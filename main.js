(()=>{var t={623:()=>{}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}(()=>{"use strict";var t=o(623);const e=(t,e,o,n="important",i=!1)=>({id:Date.now(),title:t,desc:e,dueDate:o,priority:n,completed:i}),n="very important",i=e("Milk","Buy some milk for the cat","Some day",n),a=e("Writing","Write some text to my book","Today","not important",!0),d=e("Buy cat food","Buy some kitekat","Today",n);(0,t.addToDoObj)(i),(0,t.addToDoObj)(a),(0,t.addToDoObj)(d),console.table(t.toDosObj.home),console.table(t.toDosObj.default),console.log(t.toDosObj),function(t){const e=document.querySelector("#projects-div"),o=Object.keys(t);e.innerHTML="",o.forEach((t=>{const o=document.createElement("button");o.classList.add("projects-list-button"),o.textContent=t,e.appendChild(o)}))}(t.toDosObj),function(t){const e=document.getElementById("main"),o=document.createElement("h1");o.textContent="Lika i Ya",o.setAttribute("id","mainHeader"),e.appendChild(o)}(),function(){const t=document.getElementById("main"),e=document.createElement("div");e.setAttribute("id","mainDiv"),t.appendChild(e)}(),document.querySelectorAll(".projects-list-button").forEach((t=>{t.addEventListener("click",(()=>{mainHeader.textContent=t.textContent,displayToDos(t.value)}))}))})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoieUJBQ0lBLEVBQTJCLENBQUMsRUFHaEMsU0FBU0MsRUFBb0JDLEdBRTVCLElBQUlDLEVBQWVILEVBQXlCRSxHQUM1QyxRQUFxQkUsSUFBakJELEVBQ0gsT0FBT0EsRUFBYUUsUUFHckIsSUFBSUMsRUFBU04sRUFBeUJFLEdBQVksQ0FHakRHLFFBQVMsQ0FBQyxHQU9YLE9BSEFFLEVBQW9CTCxHQUFVSSxFQUFRQSxFQUFPRCxRQUFTSixHQUcvQ0ssRUFBT0QsT0FDZixDLGdDQ3JCTyxNQUFNRyxFQUFhLENBQUNDLEVBQU9DLEVBQU1DLEVBQVNDLEVBQVcsWUFBYUMsR0FBWSxLQUMxRSxDQUNIQyxHQUFLQyxLQUFLQyxNQUNWUCxRQUNBQyxPQUNBQyxVQUNBQyxXQUNBQyxjQUtLSSxFQUNELGlCQ1JOQyxFQUFRVixFQUFXLE9BQVEsNEJBQTZCLFdBQVlTLEdBQ3BFRSxFQUFZWCxFQUFXLFVBQVcsNkJBQThCLFFEUzNELGlCQ1RvRixHQUN6RlksRUFBWVosRUFBVyxlQUFlLG1CQUFvQixRQUFTUyxJQUd6RSxJQUFBSSxZQUFXSCxJQUNYLElBQUFHLFlBQVdGLElBQ1gsSUFBQUUsWUFBV0QsR0FHWEUsUUFBUUMsTUFBTSxFQUFBQyxTQUFlLE1BQzdCRixRQUFRQyxNQUFNLEVBQUFDLFNBQWtCLFNBRWhDRixRQUFRRyxJQUFJLEVBQUFELFVDVEwsU0FBaUNFLEdBQ3BDLE1BQU1DLEVBQWNDLFNBQVNDLGNBQWMsaUJBQ3JDQyxFQUFlQyxPQUFPQyxLQUFLTixHQUdqQ0MsRUFBWU0sVUFBWSxHQUV4QkgsRUFBYUksU0FBUUMsSUFDakIsTUFBTUMsRUFBU1IsU0FBU1MsY0FBYyxVQUN0Q0QsRUFBT0UsVUFBVUMsSUFBSSx3QkFDckJILEVBQU9JLFlBQWNMLEVBQ3JCUixFQUFZYyxZQUFZTCxFQUFPLEdBSXZDLENESEFNLENBQXdCLEVBQUFsQixVQ01qQixTQUFzQm1CLEdBQ3pCLE1BQU1DLEVBQU9oQixTQUFTaUIsZUFBZSxRQUMvQkMsRUFBYWxCLFNBQVNTLGNBQWMsTUFDMUNTLEVBQVdOLFlETkYsWUNPVE0sRUFBV0MsYUFBYSxLQUFNLGNBQzlCSCxFQUFLSCxZQUFZSyxFQUlyQixDRFpBRSxHQ3hCTyxXQUNILE1BQU1KLEVBQU9oQixTQUFTaUIsZUFBZSxRQUMvQkksRUFBVXJCLFNBQVNTLGNBQWMsT0FDdkNZLEVBQVFGLGFBQWEsS0FBTSxXQUMzQkgsRUFBS0gsWUFBWVEsRUFHckIsQ0RvQkFDLEdDWW9CdEIsU0FBU3VCLGlCQUFpQix5QkFDbENqQixTQUFRRSxJQUNaQSxFQUFPZ0IsaUJBQWlCLFNBQVMsS0FDN0JOLFdBQVdOLFlBQWNKLEVBQU9JLFlBQ2hDYSxhQUFhakIsRUFBT2tCLE1BQU0sR0FDN0IsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2NyZWF0ZVRvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vRnVuY3Rpb24gdGhhdCBjcmVhdGVzIHRvLWRvc1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRvRG8gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5ID0gXCJpbXBvcnRhbnRcIiwgY29tcGxldGVkID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCA6IERhdGUubm93KCksXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSwgXG4gICAgICAgIGNvbXBsZXRlZFxuICAgIH1cbn07XG5cbi8vIE9iamVjdCB0aGF0IGhvbGRzIHByaW9yaXRpZXNcbmV4cG9ydCBjb25zdCBwcmlvcml0aWVzID0ge1xuICAgIFwidmVyeVwiOiBcInZlcnkgaW1wb3J0YW50XCIsXG4gICAgXCJpbXBvcnRhbnRcIjogXCJpbXBvcnRhbnRcIixcbiAgICBcIm5vdFwiOiBcIm5vdCBpbXBvcnRhbnRcIixcbn07XG5cblxuXG5cblxuXG5cblxuIiwiaW1wb3J0IHsgdG9Eb3NPYmosIGFkZFRvRG9PYmosIGFkZE5ld1Byb2plY3QgfSBmcm9tIFwiLi90by1kb3NcIjtcbmltcG9ydCB7IGNyZWF0ZVRvRG8sIHByaW9yaXRpZXMgfSBmcm9tIFwiLi9jcmVhdGVUb0RvXCI7XG5pbXBvcnQgeyBjcmVhdGVNYWluRGl2LCByZW5kZXJQcm9qZWN0c1RvQnV0dG9ucywgY3JlYXRlSGVhZGVyLCBkaXNwbGF5UHJvamVjdHMgfSBmcm9tIFwiLi9VSVwiO1xuLy8gaW1wb3J0IHsgYWxlcnREYXRlIH0gZnJvbSBcIi4vZGF0ZXNcIjtcblxuLy8gY3JlYXRpbmcgdGhyZWUgbmV3IHRvZG9zIHdpdGggY3JlYXRlVG9EbyBmdW5jdGlvblxuY29uc3QgbmV3RG8gPSBjcmVhdGVUb0RvKFwiTWlsa1wiLCBcIkJ1eSBzb21lIG1pbGsgZm9yIHRoZSBjYXRcIiwgXCJTb21lIGRheVwiLCBwcmlvcml0aWVzLnZlcnkpO1xuY29uc3QgYW5vdGhlckRvID0gY3JlYXRlVG9EbyhcIldyaXRpbmdcIiwgXCJXcml0ZSBzb21lIHRleHQgdG8gbXkgYm9va1wiLCBcIlRvZGF5XCIsIHByaW9yaXRpZXMubm90LCB0cnVlKTtcbmNvbnN0IHRoaXJkVG9EbyA9IGNyZWF0ZVRvRG8oXCJCdXkgY2F0IGZvb2RcIixcIkJ1eSBzb21lIGtpdGVrYXRcIiwgXCJUb2RheVwiLCBwcmlvcml0aWVzLnZlcnkpO1xuXG4vLyBhZGRpbmcgcHJldmlvdXNseSBjcmVhdGVkIHRvZG9zIHRvIHRoZSBvYmplY3QgaG9sZGluZyB0b2RvcyB3aXRoIHRoZSBhZGRUb0RvT2JqIGZ1bmN0aW9uXG5hZGRUb0RvT2JqKG5ld0RvKTtcbmFkZFRvRG9PYmooYW5vdGhlckRvKTtcbmFkZFRvRG9PYmoodGhpcmRUb0RvKTtcblxuXG5jb25zb2xlLnRhYmxlKHRvRG9zT2JqW1wiaG9tZVwiXSk7XG5jb25zb2xlLnRhYmxlKHRvRG9zT2JqW1wiZGVmYXVsdFwiXSk7XG5cbmNvbnNvbGUubG9nKHRvRG9zT2JqKVxuXG4vLyByZW5kZXJpbmcgdGhlIHByb2plY3RzIGZyb20gdGhlIG9iamVjdCB0byB0aGUgcHJvamVjdHMtZGl2XG5yZW5kZXJQcm9qZWN0c1RvQnV0dG9ucyh0b0Rvc09iaik7XG5cbi8vIGNyZWF0aW5nIHRoZSBoZWFkZXIgdG8gdGhlIG1haW5EaXZcbmNyZWF0ZUhlYWRlcihcIkxpa2EgaSBZYVwiKTtcblxuLy9yZW5kZXJpbmcgdGhlIG1haW5EaXYgaW50byB0aGUgbWFpbiBcbmNyZWF0ZU1haW5EaXYoKTtcblxuZGlzcGxheVByb2plY3RzKCk7XG5cblxuIiwiLy9GdW5jdGlvbiB0byBjcmVhdGUgdGhlIGRpdiBpbnNpZGUgdGhlIG1haW4gcGFydCBvZiB0aGUgc2NyZWVuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWFpbkRpdigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluRGl2XCIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgXG4gICAgcmV0dXJuIHsgbWFpbiwgbWFpbkRpdiB9XG59O1xuLy8gRnVuY3Rpb24gdG8gcmVuZGVyIHRoZSBwcm9qZWN0cyB0byB0aGUgRE9NIGFzIGJ1dHRvbnMgKGludG8gdGhlIHByb2plY3RzLWRpdiksIGV4cG9ydGVkIHRvIHVzZSBpbiBpbmRleC5qc1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzVG9CdXR0b25zKHByb2plY3RzKSB7XG4gICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWRpdlwiKVxuICAgIGNvbnN0IHByb2plY3RzS2V5cyA9IE9iamVjdC5rZXlzKHByb2plY3RzKTtcblxuICAgIC8vQ2xlYXIgb3V0IHRoZSBwcm9qZWN0cyBkaXYgZmlyc3QgQUxXQVlTIENMRUFSIE9VVCBCRUZPUkUgQURESU5HIE5FV1xuICAgIHByb2plY3RzRGl2LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBwcm9qZWN0c0tleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWxpc3QtYnV0dG9uXCIpO1xuICAgICAgICBidXR0b24udGV4dENvbnRlbnQgPSBrZXk7XG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvamVjdHNEaXY7XG59O1xuXG4vLyBGdW5jdGlvbiB0byBjcmVhdGUgdGhlIG1haW5EaXYgaGVhZGVyIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWRcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIobmFtZSkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgY29uc3QgbWFpbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBtYWluSGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbkhlYWRlclwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuXG4gICAgcmV0dXJuIHsgbWFpbiwgbWFpbkhlYWRlciB9O1xuXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVByb2plY3RzKCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RzLWxpc3QtYnV0dG9uXCIpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBidXR0b24udGV4dENvbnRlbnRcbiAgICAgICAgICAgIGRpc3BsYXlUb0RvcyhidXR0b24udmFsdWUpO1xuICAgICAgICB9KVxuICAgIH0pXG59O1xuXG4vLyBmdW5jdGlvbiBkaXNwbGF5VG9Eb3MobmFtZSkge1xuLy8gICAgIGxldCBuZXdQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4vLyAgICAgbWFpbkRpdi5pbm5lckhUTUwgPSBcIlwiO1xuLy8gICAgIG5ld1AuaW5uZXJIVE1MID0gdG9Eb3NPYmpbbmFtZV07XG4gICAgXG4vLyAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChuZXdQKTtcbi8vICAgICByZXR1cm4gbWFpbkRpdjtcbi8vIH07XG5cbi8vIE9iaiB0aGF0IHN0b3JlcyB0by1kb3MgYXJyYXlzIGFuZCBwcm9qZWN0IG5hbWVzXG5cbmV4cG9ydCBjb25zdCB0b0Rvc09iaiA9IHtcbiAgICBcImRlZmF1bHRcIjogW10sXG4gICAgXCJob21lXCI6IFtdLFxuICAgIFwid29ya1wiOiBbXSxcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGFkZCB0by1kb3MgdG8gdG9Eb3Mgb2JqZWN0XG5cbmV4cG9ydCBjb25zdCBhZGRUb0RvT2JqID0gKHRvRG8sIHByb2plY3QgPSBcImRlZmF1bHRcIikgPT4ge1xuICAgIHRvRG9zT2JqW3Byb2plY3RdLnB1c2godG9Ebyk7XG4gICAgcmV0dXJuIHRvRG9zT2JqO1xufTtcblxuLy8gRnVuY3Rpb24gdG8gYWRkIG5ldyBwcm9qZWN0c1xuXG5leHBvcnQgY29uc3QgYWRkTmV3UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIHRvRG9zT2JqW3Byb2plY3ROYW1lXSA9IFtdO1xuICAgIHJldHVybiB0b0Rvc09iajtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJjcmVhdGVUb0RvIiwidGl0bGUiLCJkZXNjIiwiZHVlRGF0ZSIsInByaW9yaXR5IiwiY29tcGxldGVkIiwiaWQiLCJEYXRlIiwibm93IiwicHJpb3JpdGllcyIsIm5ld0RvIiwiYW5vdGhlckRvIiwidGhpcmRUb0RvIiwiYWRkVG9Eb09iaiIsImNvbnNvbGUiLCJ0YWJsZSIsInRvRG9zT2JqIiwibG9nIiwicHJvamVjdHMiLCJwcm9qZWN0c0RpdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByb2plY3RzS2V5cyIsIk9iamVjdCIsImtleXMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwia2V5IiwiYnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXJQcm9qZWN0c1RvQnV0dG9ucyIsIm5hbWUiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJtYWluSGVhZGVyIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlSGVhZGVyIiwibWFpbkRpdiIsImNyZWF0ZU1haW5EaXYiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BsYXlUb0RvcyIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==