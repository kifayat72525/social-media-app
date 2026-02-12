async function addToBookmark(req, res){
    res.send("This is add to bookmark")
}

async function deleteFromBookmark(req, res){
    res.send("This is delete from bookmark")
}

async function getAllBookmarks(req, res){
    res.send("This is get All bookmarks")
}

export{
    addToBookmark,
    deleteFromBookmark,
    getAllBookmarks
}
