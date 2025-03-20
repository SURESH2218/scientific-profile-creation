
import React from 'react';
import { Trophy, CalendarDays } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Awards: React.FC = () => {
  const awards = [
    {
      id: 1,
      title: "Stronger BC future skills grant",
      issuer: "Continuing Business Studies, Sauder School of Business",
      value: "3500 CAD",
      date: "Jun 2023"
    },
    {
      id: 2,
      title: "Mitacs accelerate post-doctoral fellowship",
      issuer: "Mitacs",
      date: "2020–2021"
    },
    {
      id: 3,
      title: "Bourse de fin d'études doctorales",
      issuer: "Université de Montréal",
      value: "10,000 CAD",
      date: "January 2018"
    },
    {
      id: 4,
      title: "Québec Tuition Fee Exemption grant for Ph.D.",
      issuer: "Ministry of Human Resources, Government of India",
      value: "26,000 CAD",
      date: "2015-16"
    },
    {
      id: 5,
      title: "Québec Tuition Fee Exemption grant for M.Sc.",
      issuer: "Ministry of Human Resources, Government of India",
      value: "39,000 CAD",
      date: "2013-14"
    }
  ];

  const conferences = [
    {
      id: 1,
      title: "Peptidomimetic Synthesis by Transannular Cyclization and Iodoacetoxylation",
      authors: "Atmuri, N. D. P.; Lubell, W. D.",
      venue: "28th Québec-Ontario Mini-Symposium for Synthetic and Bioorganic Chemistry, McGill, Montreal",
      date: "November 11, 2017",
      type: "Oral"
    },
    {
      id: 2,
      title: "A general synthetic strategy for making azabicyclo[X.Y.0]alkanone peptidomimetics",
      authors: "Atmuri, N. D. P.; Lubell, W. D.",
      venue: "The 19th Concordia Chemistry and Biochemistry Graduate Research Conference, Concordia Univerity, Montreal",
      date: "November 18, 2016",
      type: "Poster"
    },
    {
      id: 3,
      title: "A general synthetic strategy for making azabicyclo[X.Y.0]alkanone peptidomimetics",
      authors: "Atmuri, N. D. P.; Lubell, W. D.",
      venue: "GRUM- Groupe de recherche Universitaire sur le médicament, Université de Montréal",
      date: "November 25, 2016",
      type: "Poster"
    }
  ];

  return (
    <div className="section-reveal py-8">
      <div className="space-y-8">
        <div>
          <div className="flex items-center mb-6">
            <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
              <Trophy className="h-4 w-4 text-accent" />
            </div>
            <h2 className="text-2xl font-bold">Awards & Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award) => (
              <Card key={award.id} className="neo-glass">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold">{award.title}</CardTitle>
                  <CardDescription>{award.issuer}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex justify-between items-center">
                  {award.value && (
                    <Badge className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-none">
                      {award.value}
                    </Badge>
                  )}
                  <Badge className="bg-white/10 backdrop-blur-sm text-foreground">
                    <CalendarDays className="mr-1 h-3 w-3" />
                    {award.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Conferences & Presentations</h2>
          
          <div className="space-y-4">
            {conferences.map((conference) => (
              <Card key={conference.id} className="neo-glass">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <CardTitle className="text-lg font-semibold">{conference.title}</CardTitle>
                    <Badge className={`${
                      conference.type === 'Oral' 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    } text-white border-none`}>
                      {conference.type}
                    </Badge>
                  </div>
                  <CardDescription>{conference.authors}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-sm mb-2">{conference.venue}</div>
                  <Badge className="bg-white/10 backdrop-blur-sm text-foreground">
                    <CalendarDays className="mr-1 h-3 w-3" />
                    {conference.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
