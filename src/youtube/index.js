FCC.youtube = (req) =>
{
    req.type = req.type || 'video'
    req.part = req.part || 'snippet'
    req.q = req.q || 'music'
    req.maxResults = req.maxResults || 6
    req.videoEmbeddable = req.videoEmbeddable || 'true'
    req.videoSyndicated = req.videoSyndicated || 'true'
    return `https://www.googleapis.com/youtube/v3/search?type=${req.type}&part=${req.part}&q=${req.q}&maxResults=${req.maxResults}&key=${req.key}&videoEmbeddable=${req.videoEmbeddable}&videoSyndicated=${req.videoSyndicated}`
}