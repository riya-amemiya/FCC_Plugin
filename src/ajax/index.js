FCC.Ajax.get = (req) => {
    let xml = new XMLHttpRequest()
    xml.open(req.type, req.url)
    if (req.type === 'GET') {
        xml.send()
        xml.onreadystatechange = function() {
            if (xml.readyState === 4 && xml.status === 200) {
                return JSON.parse(xml.response)
            }
        }
    } else {
        xml.setRequestHeader('Content-Type', 'application/json')
        xml.send(JSON.stringify(req.q))
    }
}