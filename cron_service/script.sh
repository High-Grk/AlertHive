#!/bin/sh
echo "Cron job started"
curl -X GET http://emergency_storage:5002/guardar
echo "Cron job ended"