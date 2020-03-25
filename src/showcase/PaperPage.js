import React from 'react';
import { Box, Heading, Paragraph, Text } from 'grommet';

export const PaperPage = () => (
  <Box pad="large">
    <Heading>Paper</Heading>
    <Box gap="medium">
      <Box direction="row" gap="medium">
        <Box pad="medium" elevation="small" round="small">
          <Text>Paper with small elevation</Text>
        </Box>
        <Box pad="medium" elevation="medium" round="small">
          <Text>Paper with medium elevation</Text>
        </Box>
        <Box pad="medium" elevation="large" round="small">
          <Text>Paper with large elevation</Text>
        </Box>
      </Box>
      <Box direction="row" gap="medium">
        <Box pad="medium" elevation="small">
          <Text>Square with small elevation</Text>
        </Box>
        <Box pad="medium" elevation="medium">
          <Text>Square with medium elevation</Text>
        </Box>
        <Box pad="medium" elevation="large">
          <Text>Square with large elevation</Text>
        </Box>
      </Box>
    </Box>
    <Heading>Container</Heading>
    <Box align="center">
      <Paragraph>
        Ce ne sera point chose inutile ne oysifve de vous remembrer la premiere
        source et origine dont nous est nay le bon Pantagruel : car ie voy que
        tous bons historiographes ainsi ont traicte leurs chronicques, non
        seulement des Grecs, des Arabes, et Ethnicques, mais aussi les auteurs
        de la saincte escripture, comme monseigneur sainct Luc mesmement, et
        sainct Matthieu.
      </Paragraph>
      <Paragraph>
        Il vous convient doncques noter que au commencement du monde ung peu
        apres que Abel fut occis par son frere Cayn, la terre embue du sang du
        iuste fut une certaine annee si tresfertile en tous fruictz qui de ses
        flans nous sont produictz, et singulierement en mesles, que lon lappela
        de toute memoire lannee des grosses mesles : car les troys en faisoient
        le boysseau, au moys de Octobre ce me semble ou bien de Septembre, affin
        que ie ne erre : fut la sepmaine tant renommee par les annales, quon
        nomme la sepmaine des troys Jeudys : car il y en eut troys, a cause des
        irreguliers bissextes que la Lune varia de son cours plus de cinq
        toizes, le monde voluntiers mangeoit desdictes mesles : car elles
        estoient belles a lœil : et delicieuses au goust.
      </Paragraph>
      <Paragraph>
        Mais tout ainsi que Noe le sainct homme, à qui nous sommes tant obligez
        et tenuz, de ce quil nous planta la vigne, dont nous vient ceste
        nectareicque, precieuse, celeste, et deificque liqueur, qu’on nomme le
        piot, fut trompe en le beuvant : car il ignoroit la grande vertu et
        puissance diceluy. Semblablement les hommes et femmes de ce temps la
        mangeoient en grand plaisir de ce beau et gros fruict : mais il leurs en
        advint beaucoup daccidens. Car a tous survint au corps une enfleure bien
        estrange : mais non a tous en ung mesme lieu. Car les ungs enfloient par
        le ventre, et le ventre leur devenoit bossu comme une grosse tonne :
        desquels il est escript : ventrem omnipotem. Et de ceste rasse nasquit
        sainct Pansart et Mardygras.
      </Paragraph>
    </Box>
  </Box>
);
