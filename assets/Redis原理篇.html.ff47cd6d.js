const e=JSON.parse('{"key":"v-dc074b80","path":"/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/04Redis%E5%8E%9F%E7%90%86%E7%AF%87/Redis%E5%8E%9F%E7%90%86%E7%AF%87.html","title":"Redis\u539F\u7406\u7BC7","lang":"zh-CN","frontmatter":{"summary":"Redis\u539F\u7406\u7BC7 1\u3001\u539F\u7406\u7BC7-Redis\u6570\u636E\u7ED3\u6784 1.1 Redis\u6570\u636E\u7ED3\u6784-\u52A8\u6001\u5B57\u7B26\u4E32 \u6211\u4EEC\u90FD\u77E5\u9053Redis\u4E2D\u4FDD\u5B58\u7684Key\u662F\u5B57\u7B26\u4E32\uFF0Cvalue\u5F80\u5F80\u662F\u5B57\u7B26\u4E32\u6216\u8005\u5B57\u7B26\u4E32\u7684\u96C6\u5408\u3002\u53EF\u89C1\u5B57\u7B26\u4E32\u662FRedis\u4E2D\u6700\u5E38\u7528\u7684\u4E00\u79CD\u6570\u636E\u7ED3\u6784\u3002 \u4E0D\u8FC7Redis\u6CA1\u6709\u76F4\u63A5\u4F7F\u7528C\u8BED\u8A00\u4E2D\u7684\u5B57\u7B26\u4E32\uFF0C\u56E0\u4E3AC\u8BED\u8A00\u5B57\u7B26\u4E32\u5B58\u5728\u5F88\u591A\u95EE\u9898\uFF1A \u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6\u7684\u9700\u8981\u901A\u8FC7\u8FD0\u7B97 \u975E\u4E8C\u8FDB\u5236\u5B89\u5168 \u4E0D\u53EF\u4FEE\u6539 Redi","head":[["meta",{"property":"og:url","content":"http://ahhwxx.51vip.biz:81/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis/04Redis%E5%8E%9F%E7%90%86%E7%AF%87/Redis%E5%8E%9F%E7%90%86%E7%AF%87.html"}],["meta",{"property":"og:site_name","content":"Hades"}],["meta",{"property":"og:title","content":"Redis\u539F\u7406\u7BC7"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"http://ahhwxx.51vip.biz:81/"}],["meta",{"property":"og:updated_time","content":"2022-08-27T19:51:27.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Redis\u539F\u7406\u7BC7"}],["meta",{"property":"article:modified_time","content":"2022-08-27T19:51:27.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1\u3001\u539F\u7406\u7BC7-Redis\u6570\u636E\u7ED3\u6784","slug":"_1\u3001\u539F\u7406\u7BC7-redis\u6570\u636E\u7ED3\u6784","children":[{"level":3,"title":"1.1 Redis\u6570\u636E\u7ED3\u6784-\u52A8\u6001\u5B57\u7B26\u4E32","slug":"_1-1-redis\u6570\u636E\u7ED3\u6784-\u52A8\u6001\u5B57\u7B26\u4E32","children":[]},{"level":3,"title":"1.2 Redis\u6570\u636E\u7ED3\u6784-intset","slug":"_1-2-redis\u6570\u636E\u7ED3\u6784-intset","children":[]},{"level":3,"title":"1.3 Redis\u6570\u636E\u7ED3\u6784-Dict","slug":"_1-3-redis\u6570\u636E\u7ED3\u6784-dict","children":[]},{"level":3,"title":"1.4 Redis\u6570\u636E\u7ED3\u6784-ZipList","slug":"_1-4-redis\u6570\u636E\u7ED3\u6784-ziplist","children":[]},{"level":3,"title":"1.5 Redis\u6570\u636E\u7ED3\u6784-ZipList\u7684\u8FDE\u9501\u66F4\u65B0\u95EE\u9898","slug":"_1-5-redis\u6570\u636E\u7ED3\u6784-ziplist\u7684\u8FDE\u9501\u66F4\u65B0\u95EE\u9898","children":[]},{"level":3,"title":"1.6 Redis\u6570\u636E\u7ED3\u6784-QuickList","slug":"_1-6-redis\u6570\u636E\u7ED3\u6784-quicklist","children":[]},{"level":3,"title":"1.7 Redis\u6570\u636E\u7ED3\u6784-RedisObject","slug":"_1-7-redis\u6570\u636E\u7ED3\u6784-redisobject","children":[]},{"level":3,"title":"1.8 Redis\u6570\u636E\u7ED3\u6784-String","slug":"_1-8-redis\u6570\u636E\u7ED3\u6784-string","children":[]},{"level":3,"title":"1.9 Redis\u6570\u636E\u7ED3\u6784-List","slug":"_1-9-redis\u6570\u636E\u7ED3\u6784-list","children":[]},{"level":3,"title":"2.0 Redis\u6570\u636E\u7ED3\u6784-Set\u7ED3\u6784","slug":"_2-0-redis\u6570\u636E\u7ED3\u6784-set\u7ED3\u6784","children":[]},{"level":3,"title":"2.1\u3001Redis\u6570\u636E\u7ED3\u6784-ZSET","slug":"_2-1\u3001redis\u6570\u636E\u7ED3\u6784-zset","children":[]},{"level":3,"title":"2.2 \u3001Redis\u6570\u636E\u7ED3\u6784-Hash","slug":"_2-2-\u3001redis\u6570\u636E\u7ED3\u6784-hash","children":[]}]},{"level":2,"title":"2\u3001\u539F\u7406\u7BC7-Redis\u7F51\u7EDC\u6A21\u578B","slug":"_2\u3001\u539F\u7406\u7BC7-redis\u7F51\u7EDC\u6A21\u578B","children":[{"level":3,"title":"2.1 \u7528\u6237\u7A7A\u95F4\u548C\u5185\u6838\u6001\u7A7A\u95F4","slug":"_2-1-\u7528\u6237\u7A7A\u95F4\u548C\u5185\u6838\u6001\u7A7A\u95F4","children":[]},{"level":3,"title":"2.2.\u7F51\u7EDC\u6A21\u578B-\u963B\u585EIO","slug":"_2-2-\u7F51\u7EDC\u6A21\u578B-\u963B\u585Eio","children":[]},{"level":3,"title":"2.3 \u7F51\u7EDC\u6A21\u578B-\u975E\u963B\u585EIO","slug":"_2-3-\u7F51\u7EDC\u6A21\u578B-\u975E\u963B\u585Eio","children":[]},{"level":3,"title":"2.4 \u7F51\u7EDC\u6A21\u578B-IO\u591A\u8DEF\u590D\u7528","slug":"_2-4-\u7F51\u7EDC\u6A21\u578B-io\u591A\u8DEF\u590D\u7528","children":[]},{"level":3,"title":"2.5 \u7F51\u7EDC\u6A21\u578B-IO\u591A\u8DEF\u590D\u7528-select\u65B9\u5F0F","slug":"_2-5-\u7F51\u7EDC\u6A21\u578B-io\u591A\u8DEF\u590D\u7528-select\u65B9\u5F0F","children":[]},{"level":3,"title":"2.6 \u7F51\u7EDC\u6A21\u578B-IO\u591A\u8DEF\u590D\u7528\u6A21\u578B-poll\u6A21\u5F0F","slug":"_2-6-\u7F51\u7EDC\u6A21\u578B-io\u591A\u8DEF\u590D\u7528\u6A21\u578B-poll\u6A21\u5F0F","children":[]},{"level":3,"title":"2.7 \u7F51\u7EDC\u6A21\u578B-IO\u591A\u8DEF\u590D\u7528\u6A21\u578B-epoll\u51FD\u6570","slug":"_2-7-\u7F51\u7EDC\u6A21\u578B-io\u591A\u8DEF\u590D\u7528\u6A21\u578B-epoll\u51FD\u6570","children":[]},{"level":3,"title":"2.8\u3001\u7F51\u7EDC\u6A21\u578B-epoll\u4E2D\u7684ET\u548CLT","slug":"_2-8\u3001\u7F51\u7EDC\u6A21\u578B-epoll\u4E2D\u7684et\u548Clt","children":[]},{"level":3,"title":"2.9 \u7F51\u7EDC\u6A21\u578B-\u57FA\u4E8Eepoll\u7684\u670D\u52A1\u5668\u7AEF\u6D41\u7A0B","slug":"_2-9-\u7F51\u7EDC\u6A21\u578B-\u57FA\u4E8Eepoll\u7684\u670D\u52A1\u5668\u7AEF\u6D41\u7A0B","children":[]},{"level":3,"title":"3.0 \u3001\u7F51\u7EDC\u6A21\u578B-\u4FE1\u53F7\u9A71\u52A8","slug":"_3-0-\u3001\u7F51\u7EDC\u6A21\u578B-\u4FE1\u53F7\u9A71\u52A8","children":[]},{"level":3,"title":"3.1 \u3001\u7F51\u7EDC\u6A21\u578B-Redis\u662F\u5355\u7EBF\u7A0B\u7684\u5417\uFF1F\u4E3A\u4EC0\u4E48\u4F7F\u7528\u5355\u7EBF\u7A0B","slug":"_3-1-\u3001\u7F51\u7EDC\u6A21\u578B-redis\u662F\u5355\u7EBF\u7A0B\u7684\u5417-\u4E3A\u4EC0\u4E48\u4F7F\u7528\u5355\u7EBF\u7A0B","children":[]},{"level":3,"title":"3.2 \u3001Redis\u7684\u5355\u7EBF\u7A0B\u6A21\u578B-Redis\u5355\u7EBF\u7A0B\u548C\u591A\u7EBF\u7A0B\u7F51\u7EDC\u6A21\u578B\u53D8\u66F4","slug":"_3-2-\u3001redis\u7684\u5355\u7EBF\u7A0B\u6A21\u578B-redis\u5355\u7EBF\u7A0B\u548C\u591A\u7EBF\u7A0B\u7F51\u7EDC\u6A21\u578B\u53D8\u66F4","children":[]}]},{"level":2,"title":"3\u3001Redis\u901A\u4FE1\u534F\u8BAE-RESP\u534F\u8BAE","slug":"_3\u3001redis\u901A\u4FE1\u534F\u8BAE-resp\u534F\u8BAE","children":[{"level":3,"title":"3.1\u3001Redis\u901A\u4FE1\u534F\u8BAE-\u57FA\u4E8ESocket\u81EA\u5B9A\u4E49Redis\u7684\u5BA2\u6237\u7AEF","slug":"_3-1\u3001redis\u901A\u4FE1\u534F\u8BAE-\u57FA\u4E8Esocket\u81EA\u5B9A\u4E49redis\u7684\u5BA2\u6237\u7AEF","children":[]},{"level":3,"title":"3.2\u3001Redis\u5185\u5B58\u56DE\u6536-\u8FC7\u671Fkey\u5904\u7406","slug":"_3-2\u3001redis\u5185\u5B58\u56DE\u6536-\u8FC7\u671Fkey\u5904\u7406","children":[]},{"level":3,"title":"3.3 Redis\u5185\u5B58\u56DE\u6536-\u5185\u5B58\u6DD8\u6C70\u7B56\u7565","slug":"_3-3-redis\u5185\u5B58\u56DE\u6536-\u5185\u5B58\u6DD8\u6C70\u7B56\u7565","children":[]}]},{"level":2,"title":"4\u3001\u7ED3\u675F\u8BED","slug":"_4\u3001\u7ED3\u675F\u8BED","children":[]}],"git":{"updatedTime":1661629887000,"contributors":[{"name":"\u590F\u4E00\u6B21","email":"xiaweifeng@live.cn","commits":1}]},"filePathRelative":"\u6570\u636E\u5E93/Redis/04Redis\u539F\u7406\u7BC7/Redis\u539F\u7406\u7BC7.md"}');export{e as data};
