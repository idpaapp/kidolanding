# Rahava Project Makefile
# برای مدیریت Docker و deployment

.PHONY: help pull build up down clean prune logs restart status

# متغیرهای پیش‌فرض
COMPOSE_FILE = docker-compose.yml
PROJECT_NAME = rahava

# نمایش راهنما
help:
	@echo "دستورات موجود:"
	@echo "  make pull      - دریافت آخرین تغییرات از git"
	@echo "  make build     - ساخت و اجرای container ها"
	@echo "  make up        - اجرای container ها"
	@echo "  make down      - متوقف کردن container ها"
	@echo "  make restart   - راه‌اندازی مجدد container ها"
	@echo "  make clean     - پاک کردن image های قدیمی و container ها"
	@echo "  make prune     - حذف image های استفاده نشده"
	@echo "  make logs      - نمایش لاگ‌ها"
	@echo "  make status    - نمایش وضعیت container ها"
	@echo "  make deploy    - deployment کامل (pull + clean + build + up)"

# دریافت آخرین تغییرات
pull:
	@echo "🔄 دریافت آخرین تغییرات از git..."
	git pull origin main
	@echo "✅ تغییرات دریافت شد"

# پاک کردن image های قدیمی و container ها
clean:
	@echo "🧹 پاک کردن container ها و image های قدیمی..."
	docker compose -f $(COMPOSE_FILE) down --remove-orphans
	docker system prune -f
	docker image prune -f
	docker volume prune -f
	@echo "✅ پاک‌سازی کامل شد"

# حذف image های استفاده نشده
prune:
	@echo "🗑️ حذف image های استفاده نشده..."
	docker image prune -f
	docker system prune -f
	@echo "✅ image های قدیمی حذف شدند"

# ساخت و اجرای container ها
build:
	@echo "🔨 ساخت و اجرای container ها..."
	docker compose -f $(COMPOSE_FILE) up -d --build
	@echo "✅ container ها ساخته و اجرا شدند"

# اجرای container ها
up:
	@echo "🚀 اجرای container ها..."
	docker compose -f $(COMPOSE_FILE) up -d
	@echo "✅ container ها اجرا شدند"

# متوقف کردن container ها
down:
	@echo "⏹️ متوقف کردن container ها..."
	docker compose -f $(COMPOSE_FILE) down
	@echo "✅ container ها متوقف شدند"

# راه‌اندازی مجدد container ها
restart:
	@echo "🔄 راه‌اندازی مجدد container ها..."
	docker compose -f $(COMPOSE_FILE) restart
	@echo "✅ container ها راه‌اندازی مجدد شدند"

# نمایش لاگ‌ها
logs:
	@echo "📋 نمایش لاگ‌ها..."
	docker compose -f $(COMPOSE_FILE) logs -f

# نمایش وضعیت container ها
status:
	@echo "📊 وضعیت container ها:"
	docker compose -f $(COMPOSE_FILE) ps

# deployment کامل
deploy: pull clean build
	@echo "🎉 deployment کامل شد!"
	@echo "📊 وضعیت نهایی:"
	@make status

# deployment سریع (بدون پاک‌سازی کامل)
quick-deploy: pull prune build
	@echo "⚡ deployment سریع انجام شد!"
	@echo "📊 وضعیت نهایی:"
	@make status

# پاک‌سازی کامل سیستم Docker
deep-clean:
	@echo "🧹 پاک‌سازی کامل سیستم Docker..."
	docker compose -f $(COMPOSE_FILE) down --volumes --remove-orphans
	docker system prune -a -f
	docker volume prune -f
	docker network prune -f
	@echo "✅ پاک‌سازی کامل انجام شد"

# نمایش استفاده از فضای دیسک
disk-usage:
	@echo "💾 استفاده از فضای دیسک:"
	docker system df

# پشتیبان‌گیری از volume ها
backup:
	@echo "💾 ایجاد پشتیبان از volume ها..."
	@mkdir -p backups
	docker run --rm -v rahava_mysql_data:/data -v $(PWD)/backups:/backup alpine tar czf /backup/mysql_backup_$(shell date +%Y%m%d_%H%M%S).tar.gz -C /data .
	@echo "✅ پشتیبان ایجاد شد در پوشه backups/"

# بازیابی از پشتیبان
restore:
	@echo "🔄 بازیابی از آخرین پشتیبان..."
	@if [ -z "$(BACKUP_FILE)" ]; then \
		echo "❌ لطفاً فایل پشتیبان را مشخص کنید: make restore BACKUP_FILE=backups/mysql_backup_YYYYMMDD_HHMMSS.tar.gz"; \
		exit 1; \
	fi
	docker run --rm -v rahava_mysql_data:/data -v $(PWD):/backup alpine tar xzf /backup/$(BACKUP_FILE) -C /data
	@echo "✅ بازیابی انجام شد"

# نمایش اطلاعات سیستم
info:
	@echo "ℹ️ اطلاعات سیستم:"
	@echo "Docker Version: $$(docker --version)"
	@echo "Docker Compose Version: $$(docker compose version)"
	@echo "Project: $(PROJECT_NAME)"
	@echo "Compose File: $(COMPOSE_FILE)"
	@echo "Current Directory: $(PWD)"