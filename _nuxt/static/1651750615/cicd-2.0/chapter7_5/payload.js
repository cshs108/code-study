__NUXT_JSONP__("/cicd-2.0/chapter7_5", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{document:{slug:"chapter7_5",description:x,title:"Chapter 07 部署流水線原則與工具設計 (7-5 ~ 7-7)",position:101,category:"持續交付2.0：實務導向的DevOps",menuTitle:"Chapter 07_5",toc:[{id:y,depth:2,text:z},{id:A,depth:t,text:B},{id:C,depth:t,text:D},{id:E,depth:t,text:F}],body:{type:"root",children:[{type:b,tag:"h2",props:{id:y},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#%E7%AC%AC7%E7%AB%A0-%E9%83%A8%E7%BD%B2%E6%B5%81%E6%B0%B4%E7%B7%9A%E5%8E%9F%E5%89%87%E8%88%87%E5%B7%A5%E5%85%B7%E8%A8%AD%E8%A8%88-7-5--7-7",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:r,props:{},children:[]},{type:a,value:c},{type:b,tag:u,props:{id:A},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#75-%E4%BC%81%E6%A5%AD%E8%A3%BD%E5%93%81%E5%BA%AB%E7%9A%84%E7%AE%A1%E7%90%86",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"企業製品庫在部屬流水線工具鏈中，是受企業信任的來源之一，也是企業信息管理中的一 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n個重要節點。只有通過安全驗證的軟體包才會被納入製品庫，並且安全驗證部門也應定期 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n對存儲的內容作安全掃描及清理。"}]},{type:a,value:c},{type:b,tag:o,props:{id:"751-製品庫的分類"},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#751-%E8%A3%BD%E5%93%81%E5%BA%AB%E7%9A%84%E5%88%86%E9%A1%9E",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"7.5.1 製品庫的分類"}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:v,props:{},children:[{type:b,tag:w,props:{align:l},children:[{type:a,value:"    製品庫    "}]},{type:b,tag:w,props:{align:l},children:[{type:a,value:"    企業內部     "},{type:b,tag:d,props:{},children:[]},{type:a,value:"     臨時        正式    "}]},{type:b,tag:w,props:{align:l},children:[{type:a,value:"    企業外部    "}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:v,props:{},children:[{type:b,tag:n,props:{align:l},children:[{type:a,value:"軟體庫"}]},{type:b,tag:n,props:{align:l},children:[{type:a,value:"A          B"}]},{type:b,tag:n,props:{align:l},children:[{type:a,value:"C"}]}]},{type:b,tag:v,props:{},children:[{type:b,tag:n,props:{align:l},children:[{type:a,value:"鏡像庫"}]},{type:b,tag:n,props:{align:l},children:[{type:a,value:"D          E"}]},{type:b,tag:n,props:{align:l},children:[{type:a,value:"F"}]}]}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"臨時軟體包庫(A) "},{type:b,tag:d,props:{},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"用於存儲團隊開發並通過流水部屬線生成代碼的所有軟體包。"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"正式軟體包庫(B) "},{type:b,tag:d,props:{},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"用於存儲通過流水線部署且經過安全驗證，被確認能夠發布到生產環境或使用者的軟體包。"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"外部軟體包庫(C) "},{type:b,tag:d,props:{},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"指該軟體包的代碼並非由團隊管理或維護，但在開發中所使用到的其他軟體包。這些軟 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n體包通過互聯網或是第三方取得，亦將其存儲在製品庫中。 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n外部軟體包一般存儲的形式可能包含3種： "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n(1) 以二進制的方式保存。 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n(2) 以代碼副本的方式保存。 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n(3) 以外部連結地址的方式保存。 "},{type:b,tag:d,props:{},children:[]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"臨時鏡像庫(D)、正式鏡像庫(E)、外部鏡像庫(F) "},{type:b,tag:d,props:{},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"基本上同軟體包庫，只是以鏡像的方式作存儲。"}]},{type:a,value:c},{type:b,tag:o,props:{id:"752-製品庫的管理原則"},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#752-%E8%A3%BD%E5%93%81%E5%BA%AB%E7%9A%84%E7%AE%A1%E7%90%86%E5%8E%9F%E5%89%87",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"7.5.2 製品庫的管理原則"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"製品庫中，每個製品都應該有標示，並且連同其來源、組成的部件以及用途等，一起保 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n存為該製品的信息。所有製品都要能夠追溯至源頭， 包括臨時製品庫中的製品。"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[]},{type:a,value:c},{type:b,tag:u,props:{id:C},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#76-%E5%A4%9A%E7%A8%AE%E5%A4%9A%E6%A8%A3%E7%9A%84%E9%83%A8%E7%BD%B2%E6%B5%81%E6%B0%B4%E7%B7%9A",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:o,props:{id:"761-多組件的部署流水線"},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#761-%E5%A4%9A%E7%B5%84%E4%BB%B6%E7%9A%84%E9%83%A8%E7%BD%B2%E6%B5%81%E6%B0%B4%E7%B7%9A",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"7.6.1 多組件的部署流水線"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"若一個軟體產品由多個組件建構而成，每個組件都有獨自的代碼倉庫，並且每個組件由 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n一個單獨的團隊負責開發與維護，整個產品的部署流水線的設計通常與下圖相似。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:p,props:{alt:q,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F54253518\u002F166899205-b31d710f-6249-41a5-ba19-efccb1121fde.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"每個組件的部署流水線成功以後，都能觸發下游的產品集成部署流水線。而這個集成 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n部署流水線的打包階段，會自動從軟體包庫中獲取每個組件最近成功的軟體包，然後 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n對其進行產品打包，再觸發集成部署流水線的後續階段。"}]},{type:a,value:c},{type:b,tag:o,props:{id:"762-個人部署流水線"},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#762-%E5%80%8B%E4%BA%BA%E9%83%A8%E7%BD%B2%E6%B5%81%E6%B0%B4%E7%B7%9A",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"7.6.2 個人部署流水線"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"每名工程師創建了自己專屬的部署流水線，用於個人在未推送代碼到團隊倉庫之前的 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n使用。個人部署流水線並不會部署到團隊共同擁有的環境中，而是僅覆蓋個人開發環 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n節。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:p,props:{alt:q,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F54253518\u002F166899696-d76c146d-e533-4ad3-b56a-98640ff7761f.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"工程師通過部署流水線的模板功能，複製一份團隊部署的副本。並僅保留兩個階段(提 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n交建構、次級建構)的內容。令工程師能夠監聽自己代碼倉庫的變化，並且自動化去觸 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n發。當開發人員提交代碼到個人倉庫時，都會自動觸發個人專屬的部署流水線。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"這樣做的好處有3個："}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"個人部署流水線與團隊的部署流水線共享建構及測試環境。"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"保證每個工程師都能利用到相同的測試資源，加快個人檢驗的速度。"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:"個人部署流水線的測試用例與團隊的部署流水線的驗證集合相同，若建構失敗，則容易定位問題。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:o,props:{id:"763-部署流水線的不斷演進"},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#763-%E9%83%A8%E7%BD%B2%E6%B5%81%E6%B0%B4%E7%B7%9A%E7%9A%84%E4%B8%8D%E6%96%B7%E6%BC%94%E9%80%B2",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:"7.6.3 部署流水線的不斷演進"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"截止到2018年4月，GoCD的社區版本每月會發布一次正式版，而其團隊的複雜的部署流 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n水線設計也已演變如下圖所示："}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:p,props:{alt:q,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F54253518\u002F166899792-fcad6ccd-9287-47ca-81d3-6239c603d261.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"構建Linux包這個部署流水線中，包含兩個階段。第一個階段是build-no_server。多 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n個任務並行執行，構建組成Server 所需的多個Jar包，也並行執行Java測試用例和 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\nJavaScript單元測試用例。這體現了部署流水線盡量並行化原則。第二個階段是 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\nbuild-server，使用經第一個階段己初步驗證通過的多個Jar包組裝成Sever包。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Linux驗收測試這個部署流水線中，也包含兩個階段。第一個階段是運行高優先級的功 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n能測試，第二個階段是對插件部分的自動化功能測試，這體現了部署流水線的快速反饋 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n優先原則。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"而在後續的各類測試(如驗收測試、回歸測試或者功能測試)中，被測試的二進制包均來 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n自前面各部署流水線的產出物，而且確保其使用同一代碼版本。在性能測試部署流水線 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n中，共包含8個階段，它們分別是生成測試用腳本、準備測試環境、啟動Sever、啟動 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\nAgent、配置用例、等待就緒、運行和停止。"}]},{type:a,value:c},{type:b,tag:r,props:{},children:[]},{type:a,value:c},{type:b,tag:u,props:{id:E},children:[{type:b,tag:f,props:{ariaHidden:g,href:"#77-%E7%82%BA%E9%96%8B%E7%99%BC%E8%80%85%E5%BB%BA%E6%A7%8B%E8%87%AA%E5%8A%A9%E5%BC%8F%E5%B7%A5%E5%85%B7",tabIndex:h},children:[{type:b,tag:i,props:{className:[j,k]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"優秀的互聯網公司採用了一種工具平台的設計理念，即為開發工程師設計他們認為好用 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n的工具。這種方式要求創建強大的工具平台，能夠很好地支持開發工程師做產品服務。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"例如 Facebook，開發人員可以通過他們內部平台看到自己的代碼已經發佈到哪個階段 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n，有多少用戶在使用。開發工程師在不需要任何人幫助的情況下，就能夠了解他的代碼 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n已經發佈到哪個階段了。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:p,props:{alt:q,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F54253518\u002F166907831-bd62ef0a-cc80-453a-b548-d91f58dde85f.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"例如電商公司 Etsy，開發工程師可以查看到自上次生產部署以後，每次的代碼變更數 "},{type:b,tag:d,props:{},children:[]},{type:a,value:"\n量，並且非常方便地查找代碼差異。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:p,props:{alt:q,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F54253518\u002F166907867-e504bada-70cf-4ca2-a575-6cadb885a3d0.png"},children:[]}]},{type:a,value:c},{type:b,tag:r,props:{},children:[]}]},dir:"\u002Fzh\u002Fcicd-2.0",path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter7_5",extension:".md",createdAt:G,updatedAt:G,to:"\u002Fcicd-2.0\u002Fchapter7_5"},prev:{title:x,path:"\u002Fzh\u002Fcicd-2.0\u002Fchapter7",to:"\u002Fcicd-2.0\u002Fchapter7"},next:null}],fetch:{},mutations:[]}}("text","element","\n","br","p","a","true",-1,"span","icon","icon-link","center","li","td","h4","img","image","hr","ul",3,"h3","tr","th","Chapter 07 部署流水線原則與工具設計","第7章-部署流水線原則與工具設計-7-5--7-7","第7章. 部署流水線原則與工具設計 (7-5 ~ 7-7)","75-企業製品庫的管理","7.5 企業製品庫的管理","76-多種多樣的部署流水線","7.6 多種多樣的部署流水線","77-為開發者建構自助式工具","7.7 為開發者建構自助式工具","2022-05-05T11:35:36.866Z")));