(()=>{"use strict";const t={default:[],home:[],word:[],gym:[]},e=(e,o="default")=>{t[o].push(e)},o=(t,e,o,a="important",l=!1)=>({id:Date.now(),title:t,desc:e,dueDate:o,priority:a,completed:l}),a=o("Milk","Buy some milk for the cat","Some day","very important"),l=o("Writing","Write some text to my book","Today","not important",!0);e(a),e(l,"default"),console.table(t.home),console.table(t.default),console.log(t)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ0EsTUFBTUEsRUFBVyxDQUNiLFFBQVcsR0FDWCxLQUFRLEdBQ1IsS0FBUSxHQUNSLElBQU8sSUFJTEMsRUFBYSxDQUFDQyxFQUFNQyxFQUFVLGFBQ2hDSCxFQUFTRyxHQUFTQyxLQUFLRixFQUFLLEVDVDFCRyxFQUFhLENBQUNDLEVBQU9DLEVBQU1DLEVBQVNDLEVBQVcsWUFBYUMsR0FBWSxLQUNuRSxDQUNIQyxHQUFLQyxLQUFLQyxNQUNWUCxRQUNBQyxPQUNBQyxVQUNBQyxXQUNBQyxjQ0pGSSxFQUFRVCxFQUFXLE9BQVEsNEJBQTZCLFdEVWxELGtCQ1ROVSxFQUFZVixFQUFXLFVBQVcsNkJBQThCLFFEVzNELGlCQ1hvRixHQUcvRkosRUFBV2EsR0FDWGIsRUFBV2MsRUFBVyxXQUd0QkMsUUFBUUMsTUFBTWpCLEVBQWUsTUFDN0JnQixRQUFRQyxNQUFNakIsRUFBa0IsU0FFaENnQixRQUFRRSxJQUFJbEIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3RvLWRvcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jcmVhdGVUb0RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE9iaiB0aGF0IHN0b3JlcyB0by1kb3MgYXJyYXlzXG5jb25zdCB0b0Rvc09iaiA9IHtcbiAgICBcImRlZmF1bHRcIjogW10sXG4gICAgXCJob21lXCI6IFtdLFxuICAgIFwid29yZFwiOiBbXSxcbiAgICBcImd5bVwiOiBbXVxufTtcblxuLy8gRnVuY3Rpb24gdG8gYWRkIHRvLWRvcyB0byB0b0RvcyBvYmplY3RcbmNvbnN0IGFkZFRvRG9PYmogPSAodG9EbywgcHJvamVjdCA9IFwiZGVmYXVsdFwiKSA9PiB7XG4gICAgdG9Eb3NPYmpbcHJvamVjdF0ucHVzaCh0b0RvKTtcbn07XG5cblxuZXhwb3J0IHsgdG9Eb3NPYmosIGFkZFRvRG9PYmogfTsiLCIvL0Z1bmN0aW9uIHRoYXQgY3JlYXRlcyB0by1kb3NcbmNvbnN0IGNyZWF0ZVRvRG8gPSAodGl0bGUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5ID0gXCJpbXBvcnRhbnRcIiwgY29tcGxldGVkID0gZmFsc2UpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCA6IERhdGUubm93KCksXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eSwgXG4gICAgICAgIGNvbXBsZXRlZFxuICAgIH1cbn07XG5cbi8vIE9iamVjdCB0aGF0IGhvbGRzIHByaW9yaXRpZXNcbmNvbnN0IHByaW9yaXRpZXMgPSB7XG4gICAgXCJ2ZXJ5XCI6IFwidmVyeSBpbXBvcnRhbnRcIixcbiAgICBcImltcG9ydGFudFwiOiBcImltcG9ydGFudFwiLFxuICAgIFwibm90XCI6IFwibm90IGltcG9ydGFudFwiLFxufTtcblxuXG5cbi8vIGFkZFRvRG8oY3JlYXRlVG9EbyhcIk1pbGtcIiwgXCJCdXkgc29tZSBtaWxrIGZvciB0aGUgY2F0XCIsIFwiU29tZSBkYXlcIiwgcHJpb3JpdGllcy52ZXJ5KSk7XG4vLyBhZGRUb0RvKGNyZWF0ZVRvRG8oXCJSZWFkaW5nXCIsIFwiUmVhZCB0aGUgYm9vayB0aGF0IEkgcmVjZW50bHkgYm91Z2h0XCIsIFwiVGhpcyBldmVuaW5nXCIsIHByaW9yaXRpZXMuaW1wb3J0YW50KSk7XG4vLyBhZGRUb0RvKGNyZWF0ZVRvRG8oXCJXYXRlclwiLCBcIkJ1eSBzb21lIHdhdGVyXCIsIFwiTmV4dCB3ZWVrXCIsIHByaW9yaXRpZXMubm90LCB0cnVlKSk7XG5cbmV4cG9ydCB7IGNyZWF0ZVRvRG8sIHByaW9yaXRpZXMgfTtcblxuXG5cblxuXG4iLCJpbXBvcnQgeyB0b0Rvc09iaiwgYWRkVG9Eb09iaiB9IGZyb20gXCIuL3RvLWRvc1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9EbywgcHJpb3JpdGllcyB9IGZyb20gXCIuL2NyZWF0ZVRvRG9cIjtcblxuXG5jb25zdCBuZXdEbyA9IGNyZWF0ZVRvRG8oXCJNaWxrXCIsIFwiQnV5IHNvbWUgbWlsayBmb3IgdGhlIGNhdFwiLCBcIlNvbWUgZGF5XCIsIHByaW9yaXRpZXMudmVyeSk7XG5jb25zdCBhbm90aGVyRG8gPSBjcmVhdGVUb0RvKFwiV3JpdGluZ1wiLCBcIldyaXRlIHNvbWUgdGV4dCB0byBteSBib29rXCIsIFwiVG9kYXlcIiwgcHJpb3JpdGllcy5ub3QsIHRydWUpO1xuXG5cbmFkZFRvRG9PYmoobmV3RG8pO1xuYWRkVG9Eb09iaihhbm90aGVyRG8sIFwiZGVmYXVsdFwiKTtcblxuXG5jb25zb2xlLnRhYmxlKHRvRG9zT2JqW1wiaG9tZVwiXSk7XG5jb25zb2xlLnRhYmxlKHRvRG9zT2JqW1wiZGVmYXVsdFwiXSk7XG5cbmNvbnNvbGUubG9nKHRvRG9zT2JqKVxuXG5cblxuLy8gYWRkVG9EbyhjcmVhdGVUb0RvKFwiTWlsa1wiLCBcIkJ1eSBzb21lIG1pbGsgZm9yIHRoZSBjYXRcIiwgXCJTb21lIGRheVwiLCBwcmlvcml0aWVzLnZlcnkpKTtcbi8vIGFkZFRvRG8oY3JlYXRlVG9EbyhcIlJlYWRpbmdcIiwgXCJSZWFkIHRoZSBib29rIHRoYXQgSSByZWNlbnRseSBib3VnaHRcIiwgXCJUaGlzIGV2ZW5pbmdcIiwgcHJpb3JpdGllcy5pbXBvcnRhbnQpKTtcbi8vIGFkZFRvRG8oY3JlYXRlVG9EbyhcIldhdGVyXCIsIFwiQnV5IHNvbWUgd2F0ZXJcIiwgXCJOZXh0IHdlZWtcIiwgcHJpb3JpdGllcy5ub3QsIHRydWUpKTsiXSwibmFtZXMiOlsidG9Eb3NPYmoiLCJhZGRUb0RvT2JqIiwidG9EbyIsInByb2plY3QiLCJwdXNoIiwiY3JlYXRlVG9EbyIsInRpdGxlIiwiZGVzYyIsImR1ZURhdGUiLCJwcmlvcml0eSIsImNvbXBsZXRlZCIsImlkIiwiRGF0ZSIsIm5vdyIsIm5ld0RvIiwiYW5vdGhlckRvIiwiY29uc29sZSIsInRhYmxlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==