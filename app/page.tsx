import {
  Billing,
  Business,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";

export default function Home() {
  return (
    <main className=" bg-primary w-full overflow-hidden font-poppins">
      <header className="paddingX flexCenter">
        <nav className="boxWidth">
          <Navbar />
        </nav>
      </header>
      <section className=" bg-primary flexStart">
        <section className="boxWidth">
          <Hero />
        </section>
      </section>
      <section className=" bg-primary paddingX flexStart">
        <section className="boxWidth">
          <Stats />
          <Business />
          <Billing />
       
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </section>
      </section>
    </main>
  );
}
