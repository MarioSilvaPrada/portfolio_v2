FROM python:3.9.6-alpine

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /usr/src/app

# install psycopg2 dependencies
RUN pip install --upgrade pip
RUN apk add --no-cache jpeg-dev zlib-dev libjpeg

# install dependencies
RUN apk update \
    && apk add postgresql-dev gcc python3-dev musl-dev \
    && apk add --no-cache --virtual .build-deps build-base linux-headers
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# copy entrypoint.sh
COPY ./backend/entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

COPY ./backend .

# run entrypoint.sh
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]

# FROM nginx
# EXPOSE 80
# COPY --from=builder ./backend /usr/share/nginx/html
# CMD ["python", "manage.py", "runserver", "0.0.0.0:80"]