import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                My <span className="text-primary">Resume</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                You can view or download my resume below.
              </p>
            </div>

            {/* Download Button */}
            <div className="text-center mb-12">
              <a
                href="https://drive.google.com/file/d/18ffPnLaN1lszVogSTgS2o1f-QrTP1TkF/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg">
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Resume Preview */}
            <div className="max-w-screen-xl mx-auto rounded-xl overflow-hidden shadow-card animate-fade-in">
              <iframe
                src="https://drive.google.com/file/d/18ffPnLaN1lszVogSTgS2o1f-QrTP1TkF/preview"
                allow="autoplay"
                className="w-full h-[80vh] border border-primary/20 rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;
