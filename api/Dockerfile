FROM python:3.8.13-bullseye

ENV PYTHONUNBUFFERED=1

WORKDIR /api

# Copy dependency files first
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

EXPOSE 8000

# Add a CMD instruction
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
