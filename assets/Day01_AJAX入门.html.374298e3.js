const e=JSON.parse('{"key":"v-a9a67316","path":"/Web%E5%89%8D%E7%AB%AF/02%E7%AC%AC%E4%BA%8C%E9%98%B6%E6%AE%B5%E6%8A%80%E6%9C%AF%E8%BF%9B%E9%98%B6/%E6%A1%86%E6%9E%B6%E5%89%8D%E7%BD%AE%E8%AF%BE/01AJAX/Day01_AJAX%E5%85%A5%E9%97%A8/Day01_AJAX%E5%85%A5%E9%97%A8.html","title":"Day01_Ajax\u5165\u95E8","lang":"zh-CN","frontmatter":{"summary":"Day01_Ajax\u5165\u95E8 \u76EE\u5F55 AJAX \u6982\u5FF5\u548C axios \u4F7F\u7528; \u8BA4\u8BC6 URL; URL \u67E5\u8BE2\u53C2\u6570; \u5E38\u7528\u8BF7\u6C42\u65B9\u6CD5\u548C\u6570\u636E\u63D0\u4EA4; HTTP\u534F\u8BAE-\u62A5\u6587; \u63A5\u53E3\u6587\u6863; \u6848\u4F8B - \u7528\u6237\u767B\u5F55; form-serialize \u63D2\u4EF6; \u5B66\u4E60\u76EE\u6807 1. \u638C\u63E1 axios \u76F8\u5173\u53C2\u6570\uFF0C\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u5E76\u89E3\u6790\u5C55\u793A\u6570\u636E 1. \u638C\u63E1\u63A5\u53E3\u6587\u6863\u7684\u67E5\u770B\u548C\u4F7F\u7528 1. \u638C\u63E1\u5728\u6D4F\u89C8\u5668\u7684 netw","head":[["meta",{"property":"og:url","content":"http://ahhwxx.51vip.biz:81/Web%E5%89%8D%E7%AB%AF/02%E7%AC%AC%E4%BA%8C%E9%98%B6%E6%AE%B5%E6%8A%80%E6%9C%AF%E8%BF%9B%E9%98%B6/%E6%A1%86%E6%9E%B6%E5%89%8D%E7%BD%AE%E8%AF%BE/01AJAX/Day01_AJAX%E5%85%A5%E9%97%A8/Day01_AJAX%E5%85%A5%E9%97%A8.html"}],["meta",{"property":"og:site_name","content":"Hades"}],["meta",{"property":"og:title","content":"Day01_Ajax\u5165\u95E8"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://ahhwxx.51vip.biz:81/"}],["meta",{"property":"og:updated_time","content":"2024-02-21T12:14:46.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Day01_Ajax\u5165\u95E8"}],["meta",{"property":"article:modified_time","content":"2024-02-21T12:14:46.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u76EE\u5F55","slug":"\u76EE\u5F55","children":[]},{"level":2,"title":"\u5B66\u4E60\u76EE\u6807","slug":"\u5B66\u4E60\u76EE\u6807","children":[]},{"level":2,"title":"01.AJAX \u6982\u5FF5\u548C axios \u4F7F\u7528","slug":"_01-ajax-\u6982\u5FF5\u548C-axios-\u4F7F\u7528","children":[]},{"level":2,"title":"02.\u8BA4\u8BC6 URL","slug":"_02-\u8BA4\u8BC6-url","children":[]},{"level":2,"title":"03.URL \u67E5\u8BE2\u53C2\u6570","slug":"_03-url-\u67E5\u8BE2\u53C2\u6570","children":[]},{"level":2,"title":"04.\u6848\u4F8B-\u67E5\u8BE2-\u5730\u533A\u5217\u8868","slug":"_04-\u6848\u4F8B-\u67E5\u8BE2-\u5730\u533A\u5217\u8868","children":[]},{"level":2,"title":"05.\u5E38\u7528\u8BF7\u6C42\u65B9\u6CD5\u548C\u6570\u636E\u63D0\u4EA4","slug":"_05-\u5E38\u7528\u8BF7\u6C42\u65B9\u6CD5\u548C\u6570\u636E\u63D0\u4EA4","children":[]},{"level":2,"title":"06.axios \u9519\u8BEF\u5904\u7406","slug":"_06-axios-\u9519\u8BEF\u5904\u7406","children":[]},{"level":2,"title":"07.HTTP \u534F\u8BAE-\u8BF7\u6C42\u62A5\u6587","slug":"_07-http-\u534F\u8BAE-\u8BF7\u6C42\u62A5\u6587","children":[]},{"level":2,"title":"08.\u8BF7\u6C42\u62A5\u6587-\u9519\u8BEF\u6392\u67E5","slug":"_08-\u8BF7\u6C42\u62A5\u6587-\u9519\u8BEF\u6392\u67E5","children":[]},{"level":2,"title":"09.HTTP \u534F\u8BAE-\u54CD\u5E94\u62A5\u6587","slug":"_09-http-\u534F\u8BAE-\u54CD\u5E94\u62A5\u6587","children":[]},{"level":2,"title":"10.\u63A5\u53E3\u6587\u6863","slug":"_10-\u63A5\u53E3\u6587\u6863","children":[]},{"level":2,"title":"11.\u6848\u4F8B-\u7528\u6237\u767B\u5F55-\u4E3B\u8981\u4E1A\u52A1","slug":"_11-\u6848\u4F8B-\u7528\u6237\u767B\u5F55-\u4E3B\u8981\u4E1A\u52A1","children":[]},{"level":2,"title":"12.\u6848\u4F8B-\u7528\u6237\u767B\u5F55-\u63D0\u793A\u4FE1\u606F","slug":"_12-\u6848\u4F8B-\u7528\u6237\u767B\u5F55-\u63D0\u793A\u4FE1\u606F","children":[]},{"level":2,"title":"13.form-serialize \u63D2\u4EF6","slug":"_13-form-serialize-\u63D2\u4EF6","children":[]},{"level":2,"title":"14.\u6848\u4F8B-\u7528\u6237\u767B\u5F55-form-serialize","slug":"_14-\u6848\u4F8B-\u7528\u6237\u767B\u5F55-form-serialize","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u732E","slug":"\u53C2\u8003\u6587\u732E","children":[]}],"git":{"updatedTime":1708517686000,"contributors":[{"name":"\u590F\u4E00\u6B21","email":"xiaweifeng@live.cn","commits":2}]},"filePathRelative":"Web\u524D\u7AEF/02\u7B2C\u4E8C\u9636\u6BB5\u6280\u672F\u8FDB\u9636/\u6846\u67B6\u524D\u7F6E\u8BFE/01AJAX/Day01_AJAX\u5165\u95E8/Day01_AJAX\u5165\u95E8.md"}');export{e as data};
