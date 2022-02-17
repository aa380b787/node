
::taskkill /F /IM "Python.exe" /T

::python manage.py runsslserver 0.0.0.0:443 --certificate certificate.crt --key private.key

::py manage.py runserver 0.0.0.0:80

::python manage.py runserver --noreload 0.0.0.0:80

taskkill /F /IM "node.exe" /T

node n.js