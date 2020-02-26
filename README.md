# JavaScript part 2 prototypes and asynchrony

JavaScript, часть 2: прототипы и асинхронность

Для каждого задания выделена отдельная папка. В ней находятся файлы:

--checks.js - файл с базовыми тестами для проверки

--index.js - мое решение

--coursera.js - решение предложенное на курсе

            2) Exercise 2: Коллекция

В этой задаче необходимо реализовать конструктор для создания коллекции элементов.

Заготовка
exercise.zip

Условия
Создание коллекции
Коллекцию можно создать двумя способами: через конструктор Collection или через метод Collection.from().

Через конструктор создается пустая коллекция.

Через метод Collection.from() можно создать коллекцию с начальными значениями, передав в нее массив элементов. Возвращается инстанс конструктора Collection.

Метод values
Метод возвращает массив элементов коллекции.

Метод at
Метод возвращает элемент с определенной позиции (нумерация начинается с единицы, а не нуля). Если позиция не существует, возвращается null.

Метод append
Метод добавляет элемент в коллекцию.

Если в метод append передана другая коллекция, то все её элементы добавляются в текущую.

Метод removeAt
Метод удаляет элемент с переданной позиции (нумерация начинается с единицы) и в случае успеха возвращает true. Если элемента на переданной позиции не существует, то метод возвращает false.

Пояснения
Гарантируется корректное использование методов.
Коллекция может содержать любые элементы кроме экземпляров конструктора Collection.
Ожидается, что все методы (кроме from) будут объявлены в Collection.prototype.
Проверку добавляемого элемента в методе append можно сделать через instanceof.
