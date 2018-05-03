const str = `
<title>
Container chứa vảy tê tê dán mác hạt điều về Việt Nam
</title>
<description>
<![CDATA[
<a href="https://vnexpress.net/tin-tuc/phap-luat/container-chua-vay-te-te-dan-mac-hat-dieu-ve-viet-nam-3744681.html"><img width=130 height=100 src="https://i-vnexpress.vnecdn.net/2018/05/03/vaytete-6734-1525345369_180x108.jpg" ></a></br>Hơn 3 tấn vảy tê tê châu Phi giấu trong container được khai báo là hạt điều, bị phát hiện khi quá cảnh tại cảng Cát Lái để sang Campuchia.
]]>
</description>
<pubDate>Thu, 03 May 2018 18:35:16 +0700</pubDate>
<link>
https://vnexpress.net/tin-tuc/phap-luat/container-chua-vay-te-te-dan-mac-hat-dieu-ve-viet-nam-3744681.html
</link>
<guid>
https://vnexpress.net/tin-tuc/phap-luat/container-chua-vay-te-te-dan-mac-hat-dieu-ve-viet-nam-3744681.html
</guid>
<slash:comments>0</slash:comments>
</item>`

function getBody(source, pre, post) {
    const startIndex = source.lastIndexOf(pre) + pre.length;
    const endIndex = source.lastIndexOf(post);
    return source.substring(startIndex, endIndex).trim();
}

const title = getBody(str, '<title>', '</title>');
const link = getBody(str, '<link>', '</link>');
const description = getBody(str, '</a></br>', ']]>');
const image = getBody(str, 'src="', '></a>');
const id = getBody(link, '-', '.');

console.log({ id, title, link, description, image });
