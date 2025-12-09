import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const lessons = [
    {
      title: 'Основы программирования на Python',
      description: 'Переменные, циклы, условия',
      class: '10 класс',
      topics: 12
    },
    {
      title: 'Алгоритмы и структуры данных',
      description: 'Сортировка, поиск, деревья',
      class: '10 класс',
      topics: 15
    },
    {
      title: 'Объектно-ориентированное программирование',
      description: 'Классы, наследование, полиморфизм',
      class: '11 класс',
      topics: 10
    },
    {
      title: 'Базы данных и SQL',
      description: 'Проектирование БД, запросы',
      class: '11 класс',
      topics: 8
    }
  ];

  const materials = [
    {
      title: 'Презентация: Введение в Python',
      type: 'Презентация',
      size: '2.4 MB',
      icon: 'Presentation'
    },
    {
      title: 'Методичка: Циклы и условия',
      type: 'PDF',
      size: '1.2 MB',
      icon: 'FileText'
    },
    {
      title: 'Задачник: Алгоритмы',
      type: 'Документ',
      size: '850 KB',
      icon: 'BookOpen'
    },
    {
      title: 'Шпаргалка: SQL команды',
      type: 'PDF',
      size: '450 KB',
      icon: 'FileCode'
    }
  ];

  const projects = [
    {
      title: 'Калькулятор с GUI',
      author: 'Иванов Алексей',
      description: 'Графический калькулятор на Python с использованием Tkinter',
      grade: 'Отлично'
    },
    {
      title: 'База данных школьной библиотеки',
      author: 'Петрова Мария',
      description: 'Система учета книг с веб-интерфейсом',
      grade: 'Отлично'
    },
    {
      title: 'Игра "Змейка"',
      author: 'Сидоров Дмитрий',
      description: 'Классическая игра на Python + Pygame',
      grade: 'Хорошо'
    }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-3xl">
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Информатика 10-11 класс
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Изучаем программирование, алгоритмы и современные технологии
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" className="gap-2" onClick={() => setActiveSection('lessons')}>
                  <Icon name="BookOpen" size={20} />
                  Перейти к урокам
                </Button>
                <Button size="lg" variant="outline" className="gap-2" onClick={() => setActiveSection('materials')}>
                  <Icon name="Download" size={20} />
                  Материалы
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-scale-in" onClick={() => setActiveSection('lessons')}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="GraduationCap" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Уроки</CardTitle>
                  <CardDescription>Темы по программированию</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-primary">{lessons.length}</p>
                  <p className="text-sm text-muted-foreground">активных курса</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-scale-in" onClick={() => setActiveSection('materials')}>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="FileText" size={24} className="text-secondary" />
                  </div>
                  <CardTitle>Материалы</CardTitle>
                  <CardDescription>Презентации и методички</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-secondary">{materials.length}</p>
                  <p className="text-sm text-muted-foreground">доступных файлов</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer animate-scale-in" onClick={() => setActiveSection('projects')}>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Lightbulb" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Проекты</CardTitle>
                  <CardDescription>Работы учеников</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-accent">{projects.length}</p>
                  <p className="text-sm text-muted-foreground">лучших проектов</p>
                </CardContent>
              </Card>
            </section>
          </div>
        );

      case 'lessons':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-4xl font-bold">Уроки</h2>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {lessons.length} курса
              </Badge>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {lessons.map((lesson, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge>{lesson.class}</Badge>
                      <span className="text-sm text-muted-foreground">{lesson.topics} тем</span>
                    </div>
                    <CardTitle className="text-2xl">{lesson.title}</CardTitle>
                    <CardDescription className="text-base">{lesson.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full gap-2">
                      <Icon name="Play" size={18} />
                      Начать изучение
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'materials':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-4xl font-bold">Учебные материалы</h2>
              <Button className="gap-2">
                <Icon name="Upload" size={18} />
                Загрузить файл
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {materials.map((material, idx) => (
                <Card key={idx} className="hover:shadow-md transition-shadow">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={material.icon as any} size={24} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">{material.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span>{material.type}</span>
                        <span>•</span>
                        <span>{material.size}</span>
                      </div>
                    </div>
                    <Button size="icon" variant="ghost">
                      <Icon name="Download" size={20} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-4xl font-bold">Проекты учеников</h2>
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              {projects.map((project, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                        <p className="text-muted-foreground mt-1">Автор: {project.author}</p>
                      </div>
                      <Badge variant={project.grade === 'Отлично' ? 'default' : 'secondary'}>
                        {project.grade}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Button variant="outline" className="gap-2">
                      <Icon name="Eye" size={18} />
                      Посмотреть проект
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-heading text-4xl font-bold mb-8">Обо мне</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="md:col-span-1">
                <CardContent className="pt-6">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-4 flex items-center justify-center">
                    <Icon name="User" size={80} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-center mb-2">Преподаватель информатики</h3>
                  <p className="text-center text-muted-foreground">10-11 классы</p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="text-3xl">Образование и опыт</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="GraduationCap" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Образование</h4>
                      <p className="text-muted-foreground">Высшее педагогическое, специальность "Информатика"</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Award" size={20} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Опыт преподавания</h4>
                      <p className="text-muted-foreground">Более 8 лет в старших классах</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Code" size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Специализация</h4>
                      <p className="text-muted-foreground">Python, алгоритмы, базы данных, веб-разработка</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Trophy" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Достижения</h4>
                      <p className="text-muted-foreground">Призеры олимпиад по программированию, 5 победителей регионального этапа</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'contacts':
        return (
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-heading text-4xl font-bold mb-8">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Связаться со мной</CardTitle>
                  <CardDescription>Выберите удобный способ связи</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">teacher@school.ru</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Icon name="Phone" size={24} className="text-secondary" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Icon name="MessageCircle" size={24} className="text-accent" />
                    <div>
                      <p className="font-semibold">Telegram</p>
                      <p className="text-sm text-muted-foreground">@teacher_informatics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Консультации</CardTitle>
                  <CardDescription>Время для вопросов и помощи</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Часы консультаций</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Понедельник, Среда: 15:00 - 16:30<br />
                        Пятница: 14:00 - 15:30
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-secondary mt-1" />
                    <div>
                      <p className="font-semibold">Кабинет</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Кабинет информатики №305<br />
                        3 этаж, правое крыло
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Code2" size={24} className="text-white" />
              </div>
              <span className="font-heading font-bold text-xl">Информатика</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
                className="gap-2"
              >
                <Icon name="Home" size={18} />
                Главная
              </Button>
              <Button
                variant={activeSection === 'lessons' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('lessons')}
                className="gap-2"
              >
                <Icon name="BookOpen" size={18} />
                Уроки
              </Button>
              <Button
                variant={activeSection === 'materials' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('materials')}
                className="gap-2"
              >
                <Icon name="FileText" size={18} />
                Материалы
              </Button>
              <Button
                variant={activeSection === 'projects' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('projects')}
                className="gap-2"
              >
                <Icon name="Lightbulb" size={18} />
                Проекты
              </Button>
              <Button
                variant={activeSection === 'about' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('about')}
                className="gap-2"
              >
                <Icon name="User" size={18} />
                Обо мне
              </Button>
              <Button
                variant={activeSection === 'contacts' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('contacts')}
                className="gap-2"
              >
                <Icon name="Mail" size={18} />
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {renderContent()}
      </main>

      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              © 2024 Информатика 10-11 класс. Все материалы защищены.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
