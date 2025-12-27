import { motion } from 'motion/react';
import { Plane, Globe, Users, MapPin, Check, Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const scrollToEnroll = () => {
    const enrollSection = document.getElementById('enroll-section');
    enrollSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: 'Аэропорт без стресса',
      description: 'Регистрация, паспортный контроль, вопросы на таможне — всё на английском.',
      result: 'Уверенность уже в первые часы за границей.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'В отеле: заселение и помощь',
      description: 'Как попросить сменить номер, вызвать уборку или спросить про Wi-Fi.',
      result: 'Практика вежливых фраз и повседневной лексики.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Кафе и рестораны',
      description: 'Заказ еды, вопросы про аллергены, счёт и чаевые.',
      result: 'Развитие гастрономического словаря и уверенности в общении.'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'На улице: ориентирование и просьбы',
      description: 'Как спросить дорогу, вызвать такси или найти аптеку.',
      result: 'Понимание устной речи и произношения в реальных ситуациях.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Экстренные случаи',
      description: 'Потеря вещей, болезнь, помощь полиции — всё это на английском.',
      result: 'Важные фразы, которые могут спасти отпуск.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Туризм и развлечения',
      description: 'Покупка билетов, экскурсии, общение с гидами, музеи и парки.',
      result: 'Погружение в культурный контекст через язык.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Дружба в путешествиях',
      description: 'Как познакомиться с другими детьми или подростками за границей.',
      result: 'Игровая практика диалогов и неформального общения.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Дипломный проект',
      description: 'Ребёнок планирует воображаемое путешествие и представляет его на английском.',
      result: 'Развитие связной речи и творческого самовыражения.'
    }
  ];

  const benefits = [
    'Акцент на практическую, живую речь, а не на грамматику ради грамматики',
    'Все ситуации — из реальной жизни путешественника',
    'Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты',
    'Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6 sm:mb-8">
              <Plane className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Курс для путешественников</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight">
              Английский для путешествий
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана?
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto">
              Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToEnroll}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              Записаться на курс
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 sm:mt-16 lg:mt-20 relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1760229803660-fc5d996d9b79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwbGFuZSUyMGpvdXJuZXl8ZW58MXx8fHwxNzY2ODY1MTg4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Travel Journey"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-12 sm:py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Для кого курс
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {[
              { grade: 'Первая группа', ages: '4–5 класс' },
              { grade: 'Вторая группа', ages: '6–8 класс' }
            ].map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl mb-2">{group.grade}</h3>
                <p className="text-2xl sm:text-3xl text-primary">{group.ages}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Программа курса
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              8 модулей практического английского для реальных путешествий
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-start gap-2 text-sm text-primary/90">
                  <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{feature.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Special */}
      <section className="py-12 sm:py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Почему этот курс особенный?
              </h2>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-4 sm:p-6 hover:border-secondary/50 transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 sm:mt-12 rounded-2xl overflow-hidden shadow-xl shadow-secondary/10"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1565843248736-8c41e6db117b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjBlbmdsaXNofGVufDF8fHx8MTc2Njc4NjYwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Kids Learning"
                className="w-full h-[250px] sm:h-[350px] object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Requirements & Schedule */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-2xl sm:text-3xl mb-6 text-primary">Что потребуется</h3>
              <ul className="space-y-4">
                {[
                  'Стационарный компьютер или ноутбук с наушниками и микрофоном',
                  'Стабильный интернет и Zoom'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/90 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Schedule */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-2xl sm:text-3xl mb-6 text-secondary">Расписание</h3>
              <div className="space-y-4">
                <div className="bg-primary/10 border border-primary/30 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Группа 4–5 класс</p>
                  <p className="text-lg text-primary">Четве��г, 15:00 (МСК)</p>
                </div>
                <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground mb-1">Группа 6–8 класс</p>
                  <p className="text-lg text-secondary">Пятница, 15:30 (МСК)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-16 lg:py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Стоимость
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/50 rounded-2xl p-6 sm:p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl sm:text-2xl mb-4">Полный курс</h3>
                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl text-primary">12 000</span>
                  <span className="text-xl text-muted-foreground ml-2">руб</span>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">10 уроков</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-secondary/10 to-accent/10 border-2 border-secondary/50 rounded-2xl p-6 sm:p-8 text-center hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl sm:text-2xl mb-4">Абонемент</h3>
                <div className="mb-4">
                  <span className="text-4xl sm:text-5xl text-secondary">1 300</span>
                  <span className="text-xl text-muted-foreground ml-2">руб</span>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">за урок</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="enroll-section" className="py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border border-primary/30 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642009071428-119813340e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMHRyYXZlbHxlbnwxfHx8fDE3NjY4MjA0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080')] opacity-10 bg-cover bg-center" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/40 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm text-accent">Набор открыт!</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">
                  Готовы начать?
                </h2>

                <p className="text-lg sm:text-xl text-foreground/90 mb-4 max-w-2xl mx-auto leading-relaxed">
                  Группы маленькие — максимум 6 детей, чтобы каждый получил внимание. Места ограничены!
                </p>

                <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl text-white shadow-2xl shadow-primary/30 hover:shadow-3xl hover:shadow-accent/40 transition-all duration-300 text-lg sm:text-xl"
                >
                  Записаться на курс
                  <ArrowRight className="w-6 h-6" />
                </motion.button>

                <p className="text-sm text-muted-foreground mt-6">
                  Нажмите кнопку, чтобы связаться с нами
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Plane className="w-6 h-6 text-primary" />
              <span className="text-xl">Английский для путешествий</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Все права защищены
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
