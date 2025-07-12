

from django.test import TestCase

class SimpleTest(TestCase):
    def test_simplesmente_passa(self):
        """ Um teste simples que sempre passa. """
        self.assertEqual(1 + 1, 2)