from app import app, register_blueprints, init_data

"""
蓝图注册和celery 会导致循环引用 所以分离蓝图 和celery  create_db 需要通过蓝图扫描model 所以要放在蓝图后面
"""
register_blueprints(app)
init_data()


def main():
    app.run(host='0.0.0.0', port=8080, debug=True)


if __name__ == "__main__":
    main()
