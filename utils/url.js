const globalUrl = {
  movesList:"https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items",
  tvsList:"https://m.douban.com/rexxar/api/v2/subject_collection/tv_hot/items",
  showsList:"https://m.douban.com/rexxar/api/v2/subject_collection/tv_variety_show/items",
  movieDetail: "https://m.douban.com/rexxar/api/v2/movie/",
  tvDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  showDetail: "https://m.douban.com/rexxar/api/v2/tv/",
  moveTags:function(id){
    return `https://m.douban.com/rexxar/api/v2/movie/${id}/tags?count=8`
  },
  tvTags:function(id){
    return `https://m.douban.com/rexxar/api/v2/tv/${id}/tags?count=8`;
  },
  showTags:function(id){
    return this.tvTags(id)
  },
  // 默认start为0 count为3
  moveComments:function(id,start=0,count=3){
    return `https://m.douban.com/rexxar/api/v2/movie/${id}/interests?count=${count}&start=${start}`
  },
  tvComments:function(id,start=0,count=3){
    return `https://m.douban.com/rexxar/api/v2/tv/${id}/interests?count=${count}&start=${start}`
  },
  showComments:function(id,start=0,count=3){
    return this.tvComments(id,start,count);
  },
  searchUrl:function(q){
    return `https://m.douban.com/rexxar/api/v2/search?type=movie&q=${q}`
  }
}

export {globalUrl}