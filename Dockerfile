FROM python:3.7 as builder
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
WORKDIR /backend
COPY ./requirements.txt /requirements.txt
RUN pip install -r /requirements.txt
COPY . .

FROM nginx
EXPOSE 8000
COPY --from=builder /backend /usr/share/nginx/html