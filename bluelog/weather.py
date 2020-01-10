import urllib.request
import json

from urllib.parse import quote
import re

class Weather:

    def __init__(self,city):

        self.city_decode=quote(city,'utf-8')
        pass


    def getlocation(self,ip):

        # 获取地址
        taobaoAPI = 'http://ip.taobao.com/service/getIpInfo.php?ip='
        ip = '121.199.4.165'
        url = taobaoAPI + ip
        f = urllib.request.urlopen(url).read().decode()
        location = json.loads(f)
        location_province = location['data']['region']
        location_city = location['data']['city']
        return location_province,location_city

    def getcitycode(self):

        API='http://toy1.weather.com.cn/search?cityname=%s' %self.city_decode
        codestr=self.getContent(API)
        codestr=codestr[10:19]
        return codestr


    def getWeather(self):

        codestr=self.getcitycode()
        API='http://www.weather.com.cn/weather1d/%s.shtml' %codestr
        content=self.getContent(API)
        wea=re.search('<p class="wea" title="(.*)</p>',content)


        print(str(wea))




    def getContent(self,url):
        return urllib.request.urlopen(url).read().decode()








if __name__=='__main__':

    w=Weather('杭州')
    w.getWeather()







    

