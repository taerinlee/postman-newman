# Reference link
# https://blog.balasundar.com/run-postman-collections-using-newman-and-python

import sys
import subprocess
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

num_of_inputs = len(sys.argv)
collection = sys.argv[1]
environment = None
global_vars = None

if num_of_inputs > 2:
    environment = sys.argv[2]
if num_of_inputs > 3:
    golbals = sys.argv[3]

command = "newman run "+collection
if environment:
    command += " -e "+environment
if global_vars:
    command += " -g "+global_vars

command = subprocess.Popen(command.split(' '), stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
output, error = command.communicate()

if error:
    email_body = "Error while running the command"
else:
    email_body = output.decode('utf-8')

print(email_body)