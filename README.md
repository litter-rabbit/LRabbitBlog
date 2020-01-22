# LRabbit  BLog

## Installation

clone:
```
$ git clone https://github.com/litter-rabbit/LRabbitBlog
$ cd bluelog
``` 
创建环境
```
1.python -m venv env
2.source activate
3. pip install -r requirements.txt
4.flask initdb
5.flask init
6.gunicorn -w 4 -b 127.0.0.1:8000 wsgi:app



