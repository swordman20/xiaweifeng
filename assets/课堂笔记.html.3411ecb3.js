const e=JSON.parse('{"key":"v-6bdf63dd","path":"/%E8%BF%90%E7%BB%B4%E6%8A%80%E6%9C%AF/Linux%E5%9F%BA%E7%A1%80/day02/%E8%AF%BE%E5%A0%82%E7%AC%94%E8%AE%B0.html","title":"Linux\u7B2C\u4E8C\u5929","lang":"zh-CN","frontmatter":{"summary":"Linux\u7B2C\u4E8C\u5929 1.gzip\u538B\u7F29\u548C\u89E3\u538B\u6587\u4EF6 gzip \u6587\u4EF6\u540D \u538B\u7F29\u6307\u5B9A\u6587\u4EF6; gzip -d \u6587\u4EF6\u540D; 2.zip\u538B\u7F29\u548C\u89E3\u538B\u6587\u4EF6 zip \u6587\u4EF6\u540D.zip \u6E90\u6587\u4EF6; unzip \u6587\u4EF6\u540D; 3.tar\u6253\u5305\u548C\u89E3\u5305\u6587\u4EF6\u6216\u76EE\u5F55 tar -cvf \u6253\u5305\u6587\u4EF6\u540D \u6E90\u6587\u4EF6; 4.tar\u4E0Egzip\u901A\u8FC7-z\u5B9E\u73B0\u4E00\u6B65\u64CD\u4F5C tar -zcvf \u6587\u4EF6\u540D \u6E90\u6587\u4EF6; 5.df\u663E\u793A\u78C1\u76D8\u7A7A\u95F4","head":[["meta",{"property":"og:url","content":"http://ahhwxx.51vip.biz:81/%E8%BF%90%E7%BB%B4%E6%8A%80%E6%9C%AF/Linux%E5%9F%BA%E7%A1%80/day02/%E8%AF%BE%E5%A0%82%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"Hades"}],["meta",{"property":"og:title","content":"Linux\u7B2C\u4E8C\u5929"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-01-16T11:39:22.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2023-01-16T11:39:22.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.gzip\u538B\u7F29\u548C\u89E3\u538B\u6587\u4EF6","slug":"_1-gzip\u538B\u7F29\u548C\u89E3\u538B\u6587\u4EF6","children":[]},{"level":2,"title":"2.zip\u538B\u7F29\u548C\u89E3\u538B\u6587\u4EF6","slug":"_2-zip\u538B\u7F29\u548C\u89E3\u538B\u6587\u4EF6","children":[]},{"level":2,"title":"3.tar\u6253\u5305\u548C\u89E3\u5305\u6587\u4EF6\u6216\u76EE\u5F55","slug":"_3-tar\u6253\u5305\u548C\u89E3\u5305\u6587\u4EF6\u6216\u76EE\u5F55","children":[]},{"level":2,"title":"4.tar\u4E0Egzip\u901A\u8FC7-z\u5B9E\u73B0\u4E00\u6B65\u64CD\u4F5C","slug":"_4-tar\u4E0Egzip\u901A\u8FC7-z\u5B9E\u73B0\u4E00\u6B65\u64CD\u4F5C","children":[]},{"level":2,"title":"5.df\u663E\u793A\u78C1\u76D8\u7A7A\u95F4","slug":"_5-df\u663E\u793A\u78C1\u76D8\u7A7A\u95F4","children":[]},{"level":2,"title":"6.ps\u663E\u793A\u7CFB\u7EDF\u8FDB\u7A0B","slug":"_6-ps\u663E\u793A\u7CFB\u7EDF\u8FDB\u7A0B","children":[]},{"level":2,"title":"7.top\u52A8\u6001\u67E5\u770B\u8FDB\u7A0B\u4FE1\u606F","slug":"_7-top\u52A8\u6001\u67E5\u770B\u8FDB\u7A0B\u4FE1\u606F","children":[]},{"level":2,"title":"8.kill\u6740\u6B7B\u8FDB\u7A0B","slug":"_8-kill\u6740\u6B7B\u8FDB\u7A0B","children":[]},{"level":2,"title":"9.ping\u6D4B\u8BD5\u76EE\u6807\u4E3B\u673A\u662F\u5426\u7F51\u7EDC\u8054\u901A","slug":"_9-ping\u6D4B\u8BD5\u76EE\u6807\u4E3B\u673A\u662F\u5426\u7F51\u7EDC\u8054\u901A","children":[]},{"level":2,"title":"10.ifconfig\u67E5\u770B\u7F51\u5361\u4FE1\u606F","slug":"_10-ifconfig\u67E5\u770B\u7F51\u5361\u4FE1\u606F","children":[]},{"level":2,"title":"11.su\u5207\u6362\u7528\u6237","slug":"_11-su\u5207\u6362\u7528\u6237","children":[]},{"level":2,"title":"12.useradd\u6DFB\u52A0\u7528\u6237","slug":"_12-useradd\u6DFB\u52A0\u7528\u6237","children":[]},{"level":2,"title":"13.passwd\u4FEE\u6539\u7528\u6237\u5BC6\u7801","slug":"_13-passwd\u4FEE\u6539\u7528\u6237\u5BC6\u7801","children":[]},{"level":2,"title":"14.\u589E\u52A0\u7528\u6237\u548C\u4FEE\u6539\u7528\u6237\u7684\u6CE8\u610F","slug":"_14-\u589E\u52A0\u7528\u6237\u548C\u4FEE\u6539\u7528\u6237\u7684\u6CE8\u610F","children":[]},{"level":2,"title":"15.userdel\u5220\u9664\u7528\u6237","slug":"_15-userdel\u5220\u9664\u7528\u6237","children":[]},{"level":2,"title":"16.whoami\u67E5\u770B\u5F53\u524D\u767B\u5F55\u7528\u6237\u540D","slug":"_16-whoami\u67E5\u770B\u5F53\u524D\u767B\u5F55\u7528\u6237\u540D","children":[]},{"level":2,"title":"17vi\u7684\u4F7F\u7528","slug":"_17vi\u7684\u4F7F\u7528","children":[{"level":3,"title":"vi\u7684\u4E09\u79CD\u542F\u52A8\u65B9\u5F0F","slug":"vi\u7684\u4E09\u79CD\u542F\u52A8\u65B9\u5F0F","children":[]},{"level":3,"title":"vi\u7684\u4E09\u79CD\u9000\u51FA\u65B9\u5F0F","slug":"vi\u7684\u4E09\u79CD\u9000\u51FA\u65B9\u5F0F","children":[]},{"level":3,"title":"\u7528vi\u7F16\u8F91\u4E00\u4E2A\u6587\u4EF6,\u8BA9\u8FD9\u4E2A\u6587\u4EF6\u53EF\u6267\u884C","slug":"\u7528vi\u7F16\u8F91\u4E00\u4E2A\u6587\u4EF6-\u8BA9\u8FD9\u4E2A\u6587\u4EF6\u53EF\u6267\u884C","children":[]},{"level":3,"title":"vi\u547D\u4EE4\u6A21\u5F0F\u4E0B\u7684\u5E38\u7528\u547D\u4EE4","slug":"vi\u547D\u4EE4\u6A21\u5F0F\u4E0B\u7684\u5E38\u7528\u547D\u4EE4","children":[]}]}],"git":{"updatedTime":1673869162000,"contributors":[{"name":"\u590F\u4E00\u6B21","email":"xiaweifeng@live.cn","commits":1}]},"filePathRelative":"\u8FD0\u7EF4\u6280\u672F/Linux\u57FA\u7840/day02/\u8BFE\u5802\u7B14\u8BB0.md"}');export{e as data};
