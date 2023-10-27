# Use the official Python image
FROM python:3.11

# Set the working directory
WORKDIR /app

# Copy the application and requirements file
COPY app.py .
COPY requirements.txt .

# Install Python dependencies
RUN pip install -r requirements.txt

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["python", "app.py"]
