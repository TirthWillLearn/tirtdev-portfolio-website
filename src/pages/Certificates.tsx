import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                My <span className="text-primary">Certificates</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A collection of verified certificates and courses I’ve completed
                from industry leaders, government bodies, and academic
                institutions.
              </p>
            </div>

            {/* Industry Certificates */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">
                🎓 Industry Certificates
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Certificate 1 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
                  <img
                    src="https://i.postimg.cc/8z6MPQbf/Coursera-8-YQBAJ8-XPGK7.png"
                    alt="Backend Certificate"
                    className="w-full h-48 object-cover object-top rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Introduction to Back-End Development
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Offered by Meta (Coursera)
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/8YQBAJ8XPGK7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </Card>

                {/* Certificate 2 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
                  <img
                    src="https://i.postimg.cc/Vk55Z512/Coursera-N5-AWEC7-RQQMP.png"
                    alt="Programming with JavaScript Certificate"
                    className="w-full h-48 object-cover object-top rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Programming with JavaScript
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Offered by Meta (Coursera)
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/N5AWEC7RQQMP"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </Card>

                {/* Certificate 3 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
                  <img
                    src="https://i.postimg.cc/NFfrgDqj/Coursera-6-CZYDWCXY4-DN.png"
                    alt="Git and GitHub Certificate"
                    className="w-full h-48 object-cover object-top rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Introduction to Git and GitHub
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Offered by Google (Coursera)
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/6CZYDWCXY4DN"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </Card>

                {/* Certificate 4 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
                  <img
                    src="https://i.postimg.cc/h4mtNTrN/Coursera-J4-G3-LRFN6-HS4.png"
                    alt="Version Control Certificate"
                    className="w-full h-48 object-cover object-top rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Version Control
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Offered by Meta (Coursera)
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/J4G3LRFN6HS4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </Card>

                {/* Certificate 5 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
                  <img
                    src="https://i.postimg.cc/FRBhPw0j/Coursera-KZJH9-T9-W25-VJ.png"
                    alt="Front-End Certificate"
                    className="w-full h-48 object-cover object-top rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Introduction to Front-End Development{" "}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Offered by Meta (Coursera)
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/KZJH9T9W25VJ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </Card>

                {/* Certificate 6 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
                  <img
                    src="https://i.postimg.cc/Bbhdv37y/Coursera-AAFSCEP36-CRT.png"
                    alt="HTML and CSS in depth Certificate"
                    className="w-full h-48 object-cover object-top rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    HTML and CSS in depth
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Offered by Meta (Coursera)
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/AAFSCEP36CRT"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </Card>

                {/* Certificate 7 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in">
                  <img
                    src="https://i.postimg.cc/DZHP2yqm/Coursera-KYUWB6-VB8-NW3.png"
                    alt="React Certificate"
                    className="w-full h-48 object-cover object-top rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    React Basics{" "}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Offered by Meta (Coursera)
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://www.coursera.org/account/accomplishments/verify/KYUWB6VB8NW3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certificate
                    </a>
                  </Button>
                </Card>
              </div>
            </div>

            {/* Government Certifications */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">
                🏛️ Government Certifications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Add MBTB, NASSCOM, etc. certificates here */}

                {/* Certificate 1 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in flex flex-col">
                  <h3 className="text-xl font-semibold text-primary mb-2 min-h-[56px]">
                    Certificate Course in Python Programming
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Issued by Maharashtra Business Training Board (MBTB) – July
                    2023
                  </p>

                  <div className="mt-auto pt-2">
                    <Button variant="outline" asChild>
                      <a
                        href="https://drive.google.com/file/d/1E9imZLF2Yq2PFRmgJQFt5CDVMRnpLSgG/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </Card>

                {/* Certificate 2 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in flex flex-col">
                  <h3 className="text-xl font-semibold text-primary mb-2 min-h-[56px]">
                    Certificate Course in C++ Programming
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Issued by Maharashtra Business Training Board (MBTB) – March
                    2024
                  </p>

                  <div className="mt-auto pt-2">
                    <Button variant="outline" asChild>
                      <a
                        href="https://drive.google.com/file/d/1Fmk_hy5ymdnYVmGhaNhalmo1_KpfMb5w/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </Card>

                {/* Certificate 3 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in flex flex-col">
                  <h3 className="text-xl font-semibold text-primary mb-2 min-h-[56px]">
                    Certificate Course in Java (Core) Programming
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Issued by Maharashtra Business Training Board (MBTB) – March
                    2024
                  </p>

                  <div className="mt-auto pt-2">
                    <Button variant="outline" asChild>
                      <a
                        href="https://drive.google.com/file/d/1NGwegDuFVc3TV4RyDdOwASjY1VDFFGAg/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Academic & College Certificates */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">
                🏫 Academic & College Certificates
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Add college project certificates or seminar awards here */}

                {/* Certificate 1 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in flex flex-col">
                  <h3 className="text-xl font-semibold text-primary mb-2 min-h-[56px]">
                    Frontend Development Training (HTML, CSS, JS, Bootstrap)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Issued by K.P.B. Hinduja College of Commerce (2021–2022)
                  </p>

                  <div className="mt-auto pt-2">
                    <Button variant="outline" asChild>
                      <a
                        href="https://drive.google.com/file/d/1DsbU8ee2-nj45X2hn6fcMCeHsXWunN6s/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </Card>

                {/* Certificate 2 */}
                <Card className="bg-card-gradient border-primary/20 p-4 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in flex flex-col">
                  <h3 className="text-xl font-semibold text-primary mb-2 min-h-[56px]">
                    React Development Training
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Issued by K.P.B. Hinduja College of Commerce (2023–2024)
                  </p>

                  <div className="mt-auto pt-2">
                    <Button variant="outline" asChild>
                      <a
                        href="https://drive.google.com/file/d/1yfEAoGFH0v0ZXUgTpkBPCUCE6BzNv3we/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certificates;
