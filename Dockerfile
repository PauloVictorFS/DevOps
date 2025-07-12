# Usar uma imagem base oficial do Python.
FROM python:3.8-slim

# Definir variáveis de ambiente para o Python não gerar arquivos .pyc e para os logs saírem direto.
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV IGNORE_DOT_ENV_FILE=True
# Definir o diretório de trabalho dentro do contêiner(Ajustada pro valor correto).
WORKDIR /app

# Copiar o arquivo de dependências e instalá-las.
RUN apt-get update && apt-get install -y build-essential libpq-dev && rm -rf /var/lib/apt/lists/*
COPY requirements.txt .
COPY requirements ./requirements
RUN pip install "PyJWT==1.7.1"
RUN pip install -r requirements.txt

COPY . .

# Comando que será executado quando o contêiner iniciar.
# Inicia o servidor de desenvolvimento do Django, acessível por todas as interfaces de rede na porta 8000.
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
