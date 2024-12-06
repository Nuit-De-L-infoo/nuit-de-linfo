FROM python:3.11-alpine

ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .

# Install build dependencies needed for some Python packages
RUN apk add --no-cache --virtual .build-deps \
    gcc \
    musl-dev \
    python3-dev &&
    /usr/local/bin/python -m pip install --no-cache-dir -r requirements.txt &&
    apk del .build-deps

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
